error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AnadirAdminView.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AnadirAdminView.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 995
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AnadirAdminView.scala
text:
```scala
package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object AnadirAdminView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[PaginaPrincipal.Libro]] // por consistencia
  ): HtmlElement = {

    val nombreVar = Var("")
    val dniVar = Var("")
    val correoVar = Var("")
    val contrasenaVar = Var("")

    def registrarAdmin(): Unit = {
      val data = js.Dynamic.literal(
        nombre = nombreVar.now(),
        dni = dniVar.now(),
        correo = correoVar.now(),
        contrasena = contrasenaVar.now()
      )

      Ajax
        .post(
          url = "https://99z5gqlq-8081.brs.devtunnels.ms/admin/registraradmin", // cambia por la ruta real de tu backend
          data = JSON.stringify(data),
          headers = Map("Content-Type" -> "application@@/json")
        )
        .map { xhr =>
          if (xhr.status == 200) {
            dom.window.alert("Registro de admin exitoso")
            currentView.set(AdminView(currentView, librosVar))
          } else {
            dom.window.alert(s"Error al registrar admin: ${xhr.status}")
          }
        }
        .recover { case ex =>
          dom.window.alert("Error de red: " + ex.getMessage)
        }
    }

    div(
      styleAttr := """
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f9f9f9;
      """,

      div(
        styleAttr := """
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        """,

        h3("Registrar Nuevo Admin", styleAttr := "text-align: center; margin-bottom: 10px;"),

        label("Nombre"),
        input(
          placeholder := "Nombre",
          onInput.mapToValue --> nombreVar.writer,
          styleAttr := "padding: 8px; border: 1px solid #ccc; border-radius: 5px;"
        ),

        label("DNI"),
        input(
          placeholder := "DNI",
          onInput.mapToValue --> dniVar.writer,
          styleAttr := "padding: 8px; border: 1px solid #ccc; border-radius: 5px;"
        ),

        label("Correo"),
        input(
          placeholder := "Correo",
          onInput.mapToValue --> correoVar.writer,
          styleAttr := "padding: 8px; border: 1px solid #ccc; border-radius: 5px;"
        ),

        label("Contraseña"),
        input(
          typ := "password",
          placeholder := "Contraseña",
          onInput.mapToValue --> contrasenaVar.writer,
          styleAttr := "padding: 8px; border: 1px solid #ccc; border-radius: 5px;"
        ),

        button(
          "Registrar",
          styleAttr := """
            background-color: #3498db;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          """,
          onClick --> { _ => registrarAdmin() }
        ),

        button(
          "Volver",
          styleAttr := """
            background-color: #95a5a6;
            color: white;
            padding: 8px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          """,
          onClick --> { _ => currentView.set(AdminView(currentView, librosVar)) }
        )
      )
    )
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.