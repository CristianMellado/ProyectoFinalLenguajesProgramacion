package app.views
import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object PaginaPrincipal {

  // Definición única y completa de Libro
  case class Libro(
    id_libro: Int,
    nombre: String,
    precio: Double,
    id_categoria: String,
    nombre_categoria: String,
    nombrepdf: String,
    nombreimagen: String
  )

  // Puedes eliminar o adaptar la lista base si la necesitas, pero debe usar la nueva estructura
  // val librosIniciales: List[Libro] = List(...)

  def apply(currentView: Var[HtmlElement], librosVar: Var[List[Libro]]): HtmlElement = {
    val libros = Var(List.empty[Libro])
    // Cargar libros al entrar (igual que ClientView)
    Ajax.get(
      url = "https://99z5gqlq-8081.brs.devtunnels.ms/pagina/pagina_principal"
    ).map { xhr =>
      if (xhr.status == 200) {
        val arr = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]
        val lista = arr.map { l =>
          Libro(
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
      div(
        styleAttr := """
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background-color: #3498db;           /* azul moderno */
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          color: white;
        """,
        button("☰",
        styleAttr := """
          background: transparent;
          border: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
        """, 
        onClick --> (_ => currentView.set(FiltroView(currentView, librosVar)))),
        button(
          "👤",
          styleAttr := """
            background: #2980b9;
            border: none;
            border-radius: 5px;
            padding: 8px 12px;
            font-size: 16px;
            color: white;
            cursor: pointer;
          """,
          onClick --> { _ =>
            currentView.set(LoginView(currentView, librosVar))
          }
        )
      ),

      div(
        styleAttr := "background: linear-gradient(90deg, #e3ffe8 0%, #f9f9f9 100%); padding: 30px 0; text-align: center; margin-bottom: 30px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07);",
        h1("Bienvenido a BerlyStore!", styleAttr := "font-size: 2.5rem; color: #2d3436; margin-bottom: 10px; font-weight: bold;"),
        p("Explora nuestra colección de libros y encuentra tu próxima lectura favorita.", styleAttr := "font-size: 1.2rem; color: #636e72; margin-bottom: 0;"),
        div(
          styleAttr := "display: flex; justify-content: center; gap: 20px; margin-top: 18px;",
          button("Ver todos", styleAttr := "background: #0984e3; color: white; border: none; border-radius: 6px; padding: 10px 22px; font-size: 1rem; cursor: pointer; font-weight: 500; box-shadow: 0 1px 4px rgba(0,0,0,0.08);"),
          button("Ofertas", styleAttr := "background: #00b894; color: white; border: none; border-radius: 6px; padding: 10px 22px; font-size: 1rem; cursor: pointer; font-weight: 500; box-shadow: 0 1px 4px rgba(0,0,0,0.08);"),
          button("Nuevos", styleAttr := "background: #fdcb6e; color: #2d3436; border: none; border-radius: 6px; padding: 10px 22px; font-size: 1rem; cursor: pointer; font-weight: 500; box-shadow: 0 1px 4px rgba(0,0,0,0.08);")
        )
      ),

      div(
        styleAttr := "display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 32px; justify-items: center; padding: 30px 10px; background: #f8fafc; border-radius: 12px;",
        children <-- libros.signal.map { lista =>
          if (lista.isEmpty)
            Seq[HtmlElement](div("No hay libros disponibles."))
          else
            lista.map { libro =>
              div(
                styleAttr := "width: 250px; border: 1px solid #dfe6e9; border-radius: 16px; padding: 18px 14px; text-align: center; background-color: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.08); transition: box-shadow 0.2s; cursor: pointer; position: relative; overflow: hidden; margin-bottom: 10px; outline: none; user-select: none;",
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
                  span(f"${libro.precio}%.2f", styleAttr := "color: #0984e3; font-size: 1.15rem; font-weight: bold;")
                )
              )
            }.toSeq: Seq[HtmlElement]
        }
      )
    )
  }
}
