error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AgregarView.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AgregarView.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -com/raquo/laminar/api/L.onChange.
	 -onChange.
	 -scala/Predef.onChange.
offset: 3984
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AgregarView.scala
text:
```scala
package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object AgregarView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[PaginaPrincipal.Libro]]
  ): HtmlElement = {

    val nombreVar = Var("")
    val precioVar = Var("")
    val categoriasVar = Var(List.empty[js.Dynamic])
    val categoriaSeleccionada = Var("")

    val pdfFileVar = Var(Option.empty[dom.File])
    val imagenFileVar = Var(Option.empty[dom.File])

    // Obtener categorías
    Ajax.get("/obtener_categoria")
      .map { xhr =>
        if (xhr.status == 200) {
          val response = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]
          categoriasVar.set(response.toList)
        } else {
          dom.window.alert("Error obteniendo categorías")
        }
      }
      .recover { case ex =>
        dom.window.alert("Error conectando con el servidor: " + ex.getMessage)
      }

    def agregarLibro(): Unit = {
      val pdfFile = pdfFileVar.now().orNull
      val imagenFile = imagenFileVar.now().orNull
      val nombre = nombreVar.now()
      val precio = precioVar.now()
      val idCategoria = categoriaSeleccionada.now()

      if (pdfFile != null && imagenFile != null && nombre.nonEmpty && precio.nonEmpty && idCategoria.nonEmpty) {
        val pdfForm = new dom.FormData()
        pdfForm.append("file", pdfFile)
        Ajax
          .post(s"/uploadpdf/${pdfFile.name}", pdfForm)
          .flatMap { _ =>
            val imgForm = new dom.FormData()
            imgForm.append("file", imagenFile)
            Ajax.post(s"/upload/${imagenFile.name}", imgForm)
          }
          .flatMap { _ =>
            val data = js.Dynamic.literal(
              nombre = nombre,
              precio = precio.toFloat,
              id_categoria = idCategoria.toInt,
              nombrepdf = pdfFile.name,
              nombreimagen = imagenFile.name
            )
            Ajax.post(
              url = "/insertar_libro",
              data = JSON.stringify(data),
              headers = Map("Content-Type" -> "application/json")
            )
          }
          .map { xhr =>
            if (xhr.status == 200) {
              dom.window.alert("Libro agregado con éxito")
              currentView.set(AdminView(currentView, librosVar))
            } else {
              dom.window.alert("Error agregando libro: " + xhr.status)
            }
          }
          .recover { case ex =>
            dom.window.alert("Error: " + ex.getMessage)
          }
      } else {
        dom.window.alert("Completa todos los campos y selecciona archivos")
      }
    }

    div(
      styleAttr := """
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f2f5;
      """,

      div(
        styleAttr := """
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 300px;
        """,

        h3("Agregar Libro", styleAttr := "text-align: center;"),

        input(placeholder := "Nombre del libro", onInput.mapToValue --> nombreVar.writer),

        input(placeholder := "Precio", typ := "number", stepAttr := "0.01", onInput.mapToValue --> precioVar.writer),

        select(
          onChange.mapToValue --> categoriaSeleccionada.writer,
          children <-- categoriasVar.signal.map(_.map { cat =>
            option(value := cat.id_categoria.toString, cat.nombre.toString)
          })
        ),

        label("Seleccionar PDF:"),
        input(typ := "file", accept := "application/pdf", @@onChange.mapToFiles --> (_.headOption.foreach(pdfFileVar.set))),

        label("Seleccionar imagen de portada:"),
        input(typ := "file", accept := "image/*", onChange.mapToFiles --> (_.headOption.foreach(imagenFileVar.set))),

        button("Agregar", styleAttr := "background-color: #3498db; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer;", onClick --> { _ => agregarLibro() }),

        button("Volver", styleAttr := "background-color: #95a5a6; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer;", onClick --> { _ => currentView.set(AdminView(currentView, librosVar)) })
      )
    )
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.