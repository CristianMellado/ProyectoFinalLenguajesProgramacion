package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

case class Categoria(id: Int, nombre: String)


object AgregarView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[PaginaPrincipal.Libro]]
  ): HtmlElement = {
    
    val nombreVar = Var("")
    val precioVar = Var("")
    //val categoriasVar = Var(List.empty[js.Dynamic])
    val categoriasVar = Var(List.empty[Categoria])

    val categoriaSeleccionada = Var("")

    val pdfFileVar = Var(Option.empty[dom.File])
    val imagenFileVar = Var(Option.empty[dom.File])

    // Obtener categorias
    Ajax.get("https://99z5gqlq-8081.brs.devtunnels.ms/categoria/obtener_categoria")
        .map { xhr =>
            if (xhr.status == 200) {
            try {
                dom.console.log("Texto recibido:", xhr.responseText)

                val response = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]

                val categorias = response.map { cat =>
                Categoria(
                    id = cat.id_categoria.toString.toInt, //id = cat.id.asInstanceOf[Int], // o cat.id_categoria si así es tu JSON
                    nombre = cat.nombre.toString
                )
                }.toList

                dom.console.log("Categorías recibidas:", categorias)
                categoriasVar.set(categorias)
            } catch {
                case e: Throwable =>
                dom.console.error("Error parseando JSON:", e)
                dom.window.alert("Respuesta inválida del servidor. Revisa consola.")
            }
            } else {
            dom.console.log("Estado HTTP:", xhr.status)
            dom.window.alert("Error obteniendo categorías")
            }
            () // <- IMPORTANTE: retornar algo (unidad) para que el map compile
        }
        .recover {
            case ex =>
            dom.console.error("Error en petición de categorías:", ex)
            dom.window.alert("Error conectando con el servidor. Revisa consola para más detalles.")
        }

    // 🔹 Función para agregar libro
    def agregarLibro(): Unit = {
      val pdfFile = pdfFileVar.now().orNull
      val imagenFile = imagenFileVar.now().orNull
      val nombre = nombreVar.now()
      val precio = precioVar.now()
      val idCategoria = categoriaSeleccionada.now()

      if (pdfFile != null && imagenFile != null && nombre.nonEmpty && precio.nonEmpty && idCategoria.nonEmpty) {
        val pdfForm = new dom.FormData()
        pdfForm.append("file", pdfFile)
        Ajax.post(s"https://99z5gqlq-8081.brs.devtunnels.ms/documento/uploadpdf/${pdfFile.name}", pdfForm)
          .flatMap { _ =>
            val imgForm = new dom.FormData()
            imgForm.append("file", imagenFile)
            Ajax.post(s"https://99z5gqlq-8081.brs.devtunnels.ms/imagen/upload/${imagenFile.name}", imgForm)
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
              url = "https://99z5gqlq-8081.brs.devtunnels.ms/libro/insertar_libro",
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

    // 🔹 Vista
    div(
      styleAttr := """
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f2f5;
        font-family: 'Roboto', sans-serif;
      """,

      div(
        styleAttr := """
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 350px;
        """,

        h3("Agregar Libro", styleAttr := "text-align: center; font-size: 20px; color: #2c3e50; margin-bottom: 10px;"),

        label("Nombre del libro", styleAttr := "font-weight: bold; color: #34495e; margin-bottom: 2px;"),
        input(
          placeholder := "Ejemplo: El Principito",
          styleAttr :=
            """padding: 10px; font-size: 15px; border: 1px solid #ccc; border-radius: 5px; width: 100%;""",
          onInput.mapToValue --> nombreVar.writer
        ),

        label("Precio", styleAttr := "font-weight: bold; color: #34495e; margin-bottom: 2px;"),
        input(
          typ := "number", stepAttr := "0.01", placeholder := "Ejemplo: 19.99",
          styleAttr := "padding: 10px; font-size: 15px; border: 1px solid #ccc; border-radius: 5px; width: 100%;",
          onInput.mapToValue --> precioVar.writer
        ),

        label("Categoría", styleAttr := "font-weight: bold; color: #34495e; margin-bottom: 2px;"),
        select(
          onChange.mapToValue --> categoriaSeleccionada.writer,
          styleAttr := "padding: 10px; font-size: 15px; border: 1px solid #ccc; border-radius: 5px; width: 100%;",
          children <-- categoriasVar.signal.map(_.map { cat =>
            option(value := cat.id.toString, cat.nombre)
          })
        ),

        label("Seleccionar PDF", styleAttr := "font-weight: bold; color: #34495e; margin-bottom: 2px;"),
        input(
          typ := "file", accept := "application/pdf",
          onChange.mapToFiles --> { files => pdfFileVar.set(files.headOption) }
        ),

        label("Seleccionar imagen de portada", styleAttr := "font-weight: bold; color: #34495e; margin-bottom: 2px;"),
        input(
          typ := "file", accept := "image/*",
          onChange.mapToFiles --> { files => imagenFileVar.set(files.headOption) }
        ),

        button(
          "Agregar",
          styleAttr := "background-color: #3498db; color: white; padding: 10px; font-size: 15px; border: none; border-radius: 5px; cursor: pointer;",
          onClick --> { _ => agregarLibro() }
        ),

        button(
          "Volver",
          styleAttr := "background-color: #95a5a6; color: white; padding: 10px; font-size: 15px; border: none; border-radius: 5px; cursor: pointer;",
          onClick --> { _ => currentView.set(AdminView(currentView, librosVar)) }
        )
      )
    )
  }
}
