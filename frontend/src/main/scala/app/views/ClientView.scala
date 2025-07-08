package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object ClientView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[PaginaPrincipal.Libro]],
    personaVar: Var[Option[js.Dynamic]],
    logout: () => Unit
  ): HtmlElement = {
    // Estado para los libros
    val libros = Var(List.empty[PaginaPrincipal.Libro])

    // Cargar libros al entrar
    Ajax.get(
      url = "https://99z5gqlq-8081.brs.devtunnels.ms/pagina/pagina_principal"
    ).map { xhr =>
      if (xhr.status == 200) {
        val arr = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]
        val lista = arr.map { l =>
          PaginaPrincipal.Libro(
            id_libro = l.id_libro.asInstanceOf[Int],
            nombre = l.nombre.toString,
            precio = l.precio.asInstanceOf[Double],
            id_categoria = l.id_categoria.toString,
            nombre_categoria = l.nombre_categoria.toString,
            nombrepdf = l.nombrepdf.toString,
            nombreimagen = l.nombreimagen.toString
          )
        }.toList
        libros.set(lista)
      } else {
        dom.window.alert("Error cargando libros: " + xhr.status)
      }
    }.recover { case ex =>
      dom.window.alert("Error conectando con el servidor: " + ex.getMessage)
    }

    div(
      // contenedor general
      styleAttr := """
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        background-color: #f0f2f5;
      """,

      // Barra superior
      div(
        styleAttr := """
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 25px;
          background-color: #3498db;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          color: white;
          position: relative;
          overflow: hidden;
        """,
        // Elemento decorativo en la barra superior (onda sutil)
        div(
          styleAttr := """
            position: absolute;
            bottom: -30px;
            left: 0;
            width: 100%;
            height: 60px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50% 50% 0 0;
            transform: rotate(-3deg);
            transform-origin: bottom center;
            z-index: 0;
          """
        ),
        // Contenedor para el botón de menú y el título
        div(
          styleAttr := "display: flex; align-items: center; gap: 15px; z-index: 1;",
          // Botón de filtro (las 3 rayitas)
          button(
            styleAttr := """
              background: none;
              border: none;
              color: white;
              font-size: 1.8em;
              cursor: pointer;
              padding: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: transform 0.2s ease;
            """,
            onMouseOver --> { _.target.asInstanceOf[dom.html.Button].style.transform = "scale(1.1)" },
            onMouseOut --> { _.target.asInstanceOf[dom.html.Button].style.transform = "scale(1.0)" },
            onClick --> { _ =>
              // ¡CORRECCIÓN AQUÍ! Pasar el parámetro `onGoBack` a `FiltroView`
              currentView.set(FiltroView(currentView, librosVar))
            },
            // Icono de hamburguesa de Font Awesome
            i(cls := "fas fa-bars")
          ),
          span(
            styleAttr := "font-size: 1.3em; font-weight: 500;",
            child.text <-- personaVar.signal.map {
              case Some(p) =>
                val nombre = Option(p.nombre).map(_.toString).getOrElse("Usuario")
                s"Bienvenido, $nombre"
              case None => "Bienvenido, Usuario"
            }
          )
        ),
        // Botón de Cerrar Sesión (ya estaba)
        button(
          "Cerrar Sesión",
          {
            val isLogoutHovered = Var(false)
            Seq(
              styleAttr <-- isLogoutHovered.signal.map { hovered =>
                val baseStyle = """
                  color: white;
                  border: none;
                  padding: 8px 15px;
                  border-radius: 5px;
                  cursor: pointer;
                  font-size: 0.95em;
                  transition: background-color 0.2s ease;
                  z-index: 1;
                """
                if (hovered) {
                  s"$baseStyle background-color: #c0392b;"
                } else {
                  s"$baseStyle background-color: #e74c3c;"
                }
              },
              onMouseOver --> { _ => isLogoutHovered.set(true) },
              onMouseOut --> { _ => isLogoutHovered.set(false) }
            )
          },
          onClick --> { _ => logout() }
        )
      ),

      // Contenido principal de la vista del cliente
      div(
        styleAttr := """
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
          overflow-y: auto;
        """,
        child <-- libros.signal.map { lista =>
          if (lista.isEmpty) div("No hay libros disponibles.", styleAttr := "margin-top: 50px; font-size: 1.2em; color: #555;")
          else
            div(
              styleAttr := "display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 32px; justify-items: center; padding: 30px 10px; background: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); max-width: 1200px; width: 100%;",
              lista.map { libro =>
                div(
                  styleAttr := "width: 250px; border: 1px solid #dfe6e9; border-radius: 16px; padding: 18px 14px; text-align: center; background-color: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.08); transition: box-shadow 0.2s; cursor: pointer; position: relative; overflow: hidden; margin-bottom: 10px;",
                  onMouseOver --> { _.target.asInstanceOf[dom.html.Div].style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)" },
                  onMouseOut --> { _.target.asInstanceOf[dom.html.Div].style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)" },
                  img(
                    src := s"https://99z5gqlq-8081.brs.devtunnels.ms/frontimg/imagen/${libro.nombreimagen}",
                    alt := libro.nombre,
                    width := "170",
                    height := "240",
                    styleAttr := "border-radius: 10px; margin-bottom: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.10); object-fit: cover; object-position: top center; max-width: 100%; max-height: 240px; display: block; margin-left: auto; margin-right: auto; background: #f1f2f6;"
                  ),
                  h4(libro.nombre, styleAttr := "font-size: 1.15rem; color: #222; margin: 12px 0 6px 0; font-weight: 700; min-height: 48px;"),
                  p(libro.nombre_categoria, styleAttr := "color: #636e72; font-size: 1rem; margin-bottom: 8px; font-weight: 500;"),
                  div(
                    styleAttr := "display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 10px;",
                    span("Precio:", styleAttr := "color: #636e72; font-size: 0.98rem;"),
                    span(f"S/.${libro.precio}%.2f", styleAttr := "color: #0984e3; font-size: 1.15rem; font-weight: bold;")
                  ),
                  button(
                    "Ver detalles",
                    styleAttr := """
                      background: linear-gradient(90deg, #00b894 60%, #0984e3 100%);
                      color: white;
                      border: none;
                      border-radius: 6px;
                      padding: 9px 20px;
                      font-size: 1rem;
                      cursor: pointer;
                      font-weight: 600;
                      margin-top: 10px;
                      letter-spacing: 0.5px;
                      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
                      transition: background 0.2s, transform 0.1s ease;
                    """,
                    onMouseOver --> { _.target.asInstanceOf[dom.html.Button].style.transform = "translateY(-1px)" },
                    onMouseOut --> { _.target.asInstanceOf[dom.html.Button].style.transform = "translateY(0)" },
                    onClick --> { _ => currentView.set(ProductView(currentView, libro, personaVar, logout)) }
                  )
                )
              }
            )
        }
      )
    )
  }
}