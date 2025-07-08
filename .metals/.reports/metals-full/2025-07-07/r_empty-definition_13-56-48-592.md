error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/ReporteView.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/ReporteView.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -com/raquo/laminar/api/L.json.total.toString.
	 -json/total/toString.
	 -scala/Predef.json.total.toString.
offset: 1084
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/ReporteView.scala
text:
```scala
package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object ReporteView {
  case class Compra(
    nombreLibro: String,
    categoria: String,
    nombrePersona: String,
    dni: String,
    correo: String,
    precio: Double
  )

  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[PaginaPrincipal.Libro]] // por coherencia, aunque aquí no lo usamos
  ): HtmlElement = {

    val mesVar = Var("")
    val anioVar = Var("")
    val comprasVar = Var(List.empty[Compra])
    val totalVar = Var(0.0)

    // Función para buscar
    def buscarReporte(): Unit = {
      val mes = mesVar.now()
      val anio = anioVar.now()

      Ajax.get(s"/ruta/reporte?mes=$mes&anio=$anio")
        .map { xhr =>
          val json = JSON.parse(xhr.responseText)
          val data = json.reporte.asInstanceOf[js.Array[js.Dynamic]]
          val total = json.total.toSt@@ring.toDouble

          val compras = data.map { item =>
            Compra(
              nombreLibro = item.nombre_libro.toString,
              categoria = item.categoria.toString,
              nombrePersona = item.nombre_persona.toString,
              dni = item.dni.toString,
              correo = item.correo.toString,
              precio = item.precio.toString.toDouble
            )
          }.toList

          comprasVar.set(compras)
          totalVar.set(total)
        }
        .recover { case ex =>
          dom.window.alert("Error al obtener reporte: " + ex.getMessage)
        }
    }

    div(
      styleAttr := """
        padding: 20px;
        font-family: Roboto, sans-serif;
      """,

      h3("Reporte de Compras", styleAttr := "text-align: center; margin-bottom: 20px;"),

      // Filtros
      div(
        styleAttr := """
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        """,

        input(
          placeholder := "Mes (01-12)",
          onInput.mapToValue --> mesVar.writer,
          styleAttr := "padding: 8px; border: 1px solid #ccc; border-radius: 5px; width: 100px;"
        ),
        input(
          placeholder := "Año (e.g., 2025)",
          onInput.mapToValue --> anioVar.writer,
          styleAttr := "padding: 8px; border: 1px solid #ccc; border-radius: 5px; width: 120px;"
        ),
        button(
          "Buscar",
          styleAttr := """
            background-color: #3498db;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
          """,
          onClick --> { _ => buscarReporte() }
        )
      ),

      // Tabla
      table(
        styleAttr := """
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        """,

        thead(
          tr(
            th("Nombre Libro", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Categoría", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Nombre Persona", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("DNI", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Correo", styleAttr := "border: 1px solid #ccc; padding: 8px;"),
            th("Precio", styleAttr := "border: 1px solid #ccc; padding: 8px;")
          )
        ),
        tbody(
          children <-- comprasVar.signal.map(_.map { compra =>
            tr(
              td(compra.nombreLibro, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(compra.categoria, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(compra.nombrePersona, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(compra.dni, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(compra.correo, styleAttr := "border: 1px solid #ccc; padding: 8px;"),
              td(f"${compra.precio}%.2f", styleAttr := "border: 1px solid #ccc; padding: 8px; text-align: right;")
            )
          })
        )
      ),

      // Total
      div(
        styleAttr := """
          display: flex;
          justify-content: flex-end;
          font-weight: bold;
          font-size: 16px;
        """,
        span("Total: "),
        child.text <-- totalVar.signal.map(t => f" S/. $t%.2f")
      ),

      // Volver
      button(
        "Volver",
        styleAttr := """
          margin-top: 20px;
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

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.