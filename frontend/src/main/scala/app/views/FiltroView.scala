package app.views

import com.raquo.laminar.api.L._
import app.views.PaginaPrincipal.Libro
import org.scalajs.dom.ext.Ajax
import org.scalajs.dom
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object FiltroView {

  case class Categoria(id: Int, nombre: String)

  // -- ¡MODIFICACIÓN CLAVE AQUÍ! -- onGoBack ELIMINADO
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[Libro]]
  ): HtmlElement = {

    val categoriasVar = Var(List.empty[Categoria])
    val categoriaSeleccionada = Var("0") // Inicializado en "0" para "Todos"
    val precioMinVar = Var("")
    val precioMaxVar = Var("")
    val ordenVar = Var(true) // true: A-Z, false: Z-A

    onMountCallback { (_: MountContext[HtmlElement]) =>
      Ajax.get(
        url = "https://99z5gqlq-8081.brs.devtunnels.ms/categoria/obtener_categoria"
      ).map { xhr =>
        if (xhr.status == 200) {
          try {
            val response = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]
            val categorias = response.map { cat =>
              Categoria(
                id = cat.id_categoria.toString.toInt,
                nombre = cat.nombre.toString
              )
            }.toList
            categoriasVar.set(Categoria(0, "Todos") :: categorias)
            categoriaSeleccionada.set("0")
          } catch {
            case e: Throwable =>
              dom.console.error("Error parseando JSON de categorías:", e)
              dom.window.alert("Respuesta inválida del servidor para categorías. Revisa consola.")
          }
        } else {
          dom.console.log("Estado HTTP al obtener categorías:", xhr.status)
          dom.window.alert("Error obteniendo categorías: " + xhr.status)
        }
      }.recover {
        case ex =>
          dom.console.error("Error en petición de categorías:", ex)
          dom.window.alert("Error conectando con el servidor para categorías. Revisa consola para más detalles.")
      }
    }

    def aplicarFiltros(): Unit = {
      val idCategoria = categoriaSeleccionada.now()
      val precioMin = precioMinVar.now()
      val precioMax = precioMaxVar.now()
      val orden = ordenVar.now()

      val idCategoriaParam = if (idCategoria.nonEmpty && idCategoria != "0") s"id_categoria=$idCategoria&" else ""
      val precioMinParam = if (precioMin.nonEmpty) s"precio_minimo=$precioMin&" else ""
      val precioMaxParam = if (precioMax.nonEmpty) s"precio_maximo=$precioMax&" else ""
      val ordenParam = s"orden=$orden"

      val url = s"https://99z5gqlq-8081.brs.devtunnels.ms/filtrar/obtener_librosfiltro?${idCategoriaParam}${precioMinParam}${precioMaxParam}${ordenParam}"
      val finalUrl = if (url.endsWith("&")) url.dropRight(1) else url

      dom.console.log(s"Aplicando filtros con URL: $finalUrl")

      Ajax.get(finalUrl)
        .map { xhr =>
          if (xhr.status == 200) {
            try {
              val response = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]
              val librosFiltrados = response.map { libro =>
                PaginaPrincipal.Libro(
                  id_libro = libro.id_libro.toString.toInt,
                  nombre = libro.nombre.toString,
                  precio = libro.precio.toString.toDouble,
                  id_categoria = libro.id_categoria.toString,
                  nombre_categoria = if (js.isUndefined(libro.nombre_categoria)) "" else libro.nombre_categoria.toString,
                  nombrepdf = libro.nombrepdf.toString,
                  nombreimagen = libro.nombreimagen.toString
                )
              }.toList
              librosVar.set(librosFiltrados)
              // -- ¡MODIFICACIÓN CLAVE AQUÍ! --
              // Siempre vuelve a PaginaPrincipal después de aplicar filtros
              currentView.set(PaginaPrincipal(currentView, librosVar)) 
            } catch {
              case e: Throwable =>
                dom.console.error("Error parseando JSON de libros filtrados:", e)
                dom.window.alert("Respuesta inválida del servidor al filtrar libros. Revisa consola.")
            }
          } else {
            dom.console.log("Estado HTTP al filtrar libros:", xhr.status)
            dom.window.alert(s"Error al filtrar libros: ${xhr.status} - ${xhr.responseText}")
          }
        }
        .recover { case ex =>
          dom.console.error("Error en petición de filtrado de libros:", ex)
          dom.window.alert("Error conectando con el servidor para filtrar libros. Revisa consola para más detalles.")
        }
    }

    div(
      styleAttr := """
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #eef2f7;
        font-family: 'Roboto', sans-serif;
      """,
      div(
        styleAttr := """
          background-color: #ffffff;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 350px;
          max-width: 90%;
          border: 1px solid #e0e6ec;
        """,
        h2("Filtrar Productos", styleAttr := "text-align: center; color: #333; font-size: 2em; margin-bottom: 25px;"),

        div(
          label("Categoría:", styleAttr := "margin-bottom: 8px; font-size: 1.1em; font-weight: 500; color: #555;"),
          select(
            styleAttr := "padding: 10px; border-radius: 8px; width: 100%; border: 1px solid #ced4da; font-size: 1.05em; background-color: #f8f9fa; transition: border-color 0.2s;",
            onFocus --> { _.target.asInstanceOf[dom.html.Select].style.borderColor = "#80bdff" },
            onBlur --> { _.target.asInstanceOf[dom.html.Select].style.borderColor = "#ced4da" },
            value <-- categoriaSeleccionada.signal,
            onChange.mapToValue --> categoriaSeleccionada.writer,
            children <-- categoriasVar.signal.map { cats =>
              cats.map { cat =>
                option(value := cat.id.toString, cat.nombre)
              }
            }
          )
        ),

        div(
          label("Precio mínimo:", styleAttr := "margin-bottom: 8px; font-size: 1.1em; font-weight: 500; color: #555;"),
          input(
            typ := "number",
            minAttr := "0",
            stepAttr := "0.01",
            placeholder := "Ej: 10.00",
            value <-- precioMinVar.signal,
            onInput.mapToValue --> precioMinVar.writer,
            styleAttr := "width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ced4da; font-size: 1.05em; transition: border-color 0.2s;",
            onFocus --> { _.target.asInstanceOf[dom.html.Input].style.borderColor = "#80bdff" },
            onBlur --> { _.target.asInstanceOf[dom.html.Input].style.borderColor = "#ced4da" }
          )
        ),
        div(
          label("Precio máximo:", styleAttr := "margin-bottom: 8px; font-size: 1.1em; font-weight: 500; color: #555;"),
          input(
            typ := "number",
            minAttr := "0",
            stepAttr := "0.01",
            placeholder := "Ej: 50.00",
            value <-- precioMaxVar.signal,
            onInput.mapToValue --> precioMaxVar.writer,
            styleAttr := "width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ced4da; font-size: 1.05em; transition: border-color 0.2s;",
            onFocus --> { _.target.asInstanceOf[dom.html.Input].style.borderColor = "#80bdff" },
            onBlur --> { _.target.asInstanceOf[dom.html.Input].style.borderColor = "#ced4da" }
          )
        ),

        div(
          label("Ordenar por:", styleAttr := "margin-bottom: 8px; font-size: 1.1em; font-weight: 500; color: #555;"),
          select(
            styleAttr := "padding: 10px; border-radius: 8px; width: 100%; border: 1px solid #ced4da; font-size: 1.05em; background-color: #f8f9fa; transition: border-color 0.2s;",
            onFocus --> { _.target.asInstanceOf[dom.html.Select].style.borderColor = "#80bdff" },
            onBlur --> { _.target.asInstanceOf[dom.html.Select].style.borderColor = "#ced4da" },
            value <-- ordenVar.signal.map(b => if(b) "true" else "false"),
            onChange.mapToValue.map(_ == "true") --> ordenVar.writer,
            option(value := "true", "A-Z"),
            option(value := "false", "Z-A")
          )
        ),

        button(
          "Aplicar Filtros",
          onClick --> { _ => aplicarFiltros() },
          styleAttr := """
            background-color: #28a745;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: 600;
            transition: background-color 0.2s ease, transform 0.1s ease;
          """,
          onMouseOver --> { _.target.asInstanceOf[dom.html.Button].style.transform = "translateY(-2px)" },
          onMouseOut --> { _.target.asInstanceOf[dom.html.Button].style.transform = "translateY(0)" }
        ),

        button(
          "Volver a Inicio", // Cambiado el texto para reflejar acción directa
          // -- ¡MODIFICACIÓN CLAVE AQUÍ! --
          // Siempre vuelve a PaginaPrincipal
          onClick --> { _ => currentView.set(PaginaPrincipal(currentView, librosVar)) },
          styleAttr := """
            background-color: #6c757d;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: 600;
            transition: background-color 0.2s ease, transform 0.1s ease;
          """,
          onMouseOver --> { _.target.asInstanceOf[dom.html.Button].style.transform = "translateY(-2px)" },
          onMouseOut --> { _.target.asInstanceOf[dom.html.Button].style.transform = "translateY(0)" }
        )
      )
    )
  }
}