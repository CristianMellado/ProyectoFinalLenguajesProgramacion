package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue
import app.views.PaginaPrincipal

object EliminarView {

  case class LibroCompleto(
    id_libro: Int,
    nombre: String,
    precio: Double,
    id_categoria: String,
    nombrepdf: String,
    nombreimagen: String
  )

  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[LibroCompleto]]
  ): HtmlElement = {

    def cargarLibros(): Unit = {
      Ajax.get("https://99z5gqlq-8081.brs.devtunnels.ms/pagina/pagina_principal")
        .map { xhr =>
          if (xhr.status == 200) {
            val data = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]
            val libros = data.map { item =>
              LibroCompleto(
                id_libro = item.id_libro.asInstanceOf[Int],
                nombre = item.nombre.toString,
                precio = item.precio.toString.toDouble,
                id_categoria = item.id_categoria.toString,
                nombrepdf = item.nombrepdf.toString,
                nombreimagen = item.nombreimagen.toString
              )
            }.toList
            librosVar.set(libros)
          } else {
            dom.window.alert("Error obteniendo libros: status " + xhr.status)
          }
        }
        .recover { case ex =>
          dom.window.alert("Error cargando libros: " + ex.getMessage)
        }
    }

    cargarLibros()

    def eliminarLibro(id: Int): Unit = {
      Ajax.delete(s"https://99z5gqlq-8081.brs.devtunnels.ms/eliminar/eliminar_libro?id_libro=$id")
        .map { xhr =>
          if (xhr.status == 200) {
            dom.window.alert("Eliminado correctamente")
            cargarLibros() // recargar lista
          } else {
            dom.window.alert("Error al eliminar: " + xhr.status)
          }
        }
        .recover { case ex =>
          dom.window.alert("Error conectando: " + ex.getMessage)
        }
    }

    div(
      styleAttr := """
        padding: 20px;
        font-family: Roboto, sans-serif;
      """,

      h3("Eliminar Libros", styleAttr := "text-align: center; margin-bottom: 20px;"),

      table(
        styleAttr := """
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        """,
        thead(
          tr(
            th("ID", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Nombre", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Precio", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Categoría", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("PDF", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Imagen", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Acciones", styleAttr := "border: 1px solid #ccc; padding: 8px;")
          )
        ),
        tbody(
          children <-- librosVar.signal.map(_.map { libro =>
            tr(
              td(libro.id_libro.toString, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(libro.nombre, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(f"S/. ${libro.precio}%.2f", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(libro.id_categoria, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(libro.nombrepdf, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(libro.nombreimagen, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(
                button(
                  "🗑️ Eliminar",
                  styleAttr := """
                    background-color: #e74c3c;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                  """,
                  onClick --> { _ => eliminarLibro(libro.id_libro) }
                ),
                styleAttr := "border: 1px solid #ccc; padding: 8px;"
              )
            )
          })
        )
      ),

      button(
        "Volver",
        styleAttr := """
          background-color: #95a5a6;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        """,
        onClick --> { _ =>
          currentView.set(AdminView(currentView, Var(List.empty[PaginaPrincipal.Libro])))
        }
      )
    )
  }
}
