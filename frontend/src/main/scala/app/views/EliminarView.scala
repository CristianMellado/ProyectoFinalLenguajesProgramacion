package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue
import app.views.PaginaPrincipal.Libro

object EliminarView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[Libro]]
  ): HtmlElement = {

    // Al cargar, hacemos GET para obtener la lista de libros
    def cargarLibros(): Unit = {
      Ajax.get("/pagina_principal")
        .map { xhr =>
          val data = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]
          val libros = data.map { item =>
            Libro(
              id_libro = item.id_libro.asInstanceOf[Int],
              nombre = item.nombre.toString,
              precio = item.precio.asInstanceOf[Double],
              id_categoria = item.id_categoria.toString,
              nombre_categoria = item.nombre_categoria.toString,
              nombrepdf = item.nombrepdf.toString,
              nombreimagen = item.nombreimagen.toString
            )
          }.toList
          librosVar.set(libros)
        }
        .recover { case ex =>
          dom.window.alert("Error cargando libros: " + ex.getMessage)
        }
    }

    // Llamamos al cargar vista
    cargarLibros()

    // Función para eliminar un libro
    def eliminarLibro(id: Int): Unit = {
      Ajax.delete(s"/ruta/elminar_libro?id_libro=$id")
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
          children <-- librosVar.signal.map(_.zipWithIndex.map { case (libro, idx) =>
            tr(
              td(libro.id_libro.toString, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(libro.nombre, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(f"${libro.precio}%.2f", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(libro.nombre_categoria, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
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
                  onClick --> { _ => eliminarLibro(idx+1) } // usar idx+1 como ID simulado
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
        onClick --> { _ => currentView.set(AdminView(currentView, librosVar)) }
      )
    )
  }
}
