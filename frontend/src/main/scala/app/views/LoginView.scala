package app.views

import com.raquo.laminar.api.L._
import app.views.PaginaPrincipal.Libro
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object LoginView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[Libro]]
  ): HtmlElement = {

    val usuarioVar = Var("")
    val contrasenaVar = Var("")

    // Función para hacer login
    def login(): Unit = {
      val correo = usuarioVar.now()
      val contrasena = contrasenaVar.now()

      if (correo == "admin" && contrasena == "123") {
        dom.window.localStorage.setItem("rol", "admin")
        dom.window.localStorage.setItem("id_persona", "999")
        dom.window.localStorage.setItem("email", correo)
        currentView.set(AdminView(currentView, librosVar))
      } else {
        // Solo si NO es admin, intentamos simular el login al backend
        val data = js.Dynamic.literal(
          correo = correo,
          contrasena = contrasena
        )
        Ajax
          .post(
            url = "/ruta/login", // cuando tengas backend, ajusta la ruta
            data = JSON.stringify(data),
            headers = Map("Content-Type" -> "application/json")
          )
          .map { xhr =>
            if (xhr.status == 200) {
              val response = JSON.parse(xhr.responseText)
              val rol = response.rol.toString
              val idPersona = response.id_persona.toString
              val email = response.email.toString

              dom.window.localStorage.setItem("rol", rol)
              dom.window.localStorage.setItem("id_persona", idPersona)
              dom.window.localStorage.setItem("email", email)

              if (rol == "admin") {
                currentView.set(AdminView(currentView, librosVar))
              } else {
                currentView.set(PaginaPrincipal(currentView, librosVar))
              }
            } else {
              dom.window.alert("Error en login: " + xhr.status)
            }
          }
          .recover { case ex =>
            dom.window.alert("Error conectando con el servidor: " + ex.getMessage)
          }
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
          padding: 30px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        """,

        h2("Iniciar Sesión", styleAttr := "text-align: center;"),

        input(
          placeholder := "Correo",
          onInput.mapToValue --> usuarioVar.writer,
          styleAttr :=
            """width: 250px;
              |padding: 10px;
              |font-size: 16px;
              |border: 1px solid #ccc;
              |border-radius: 5px;
              |margin-bottom: 10px;
            """.stripMargin
        ),

        input(
          typ := "password",
          placeholder := "Contraseña",
          onInput.mapToValue --> contrasenaVar.writer,
          styleAttr :=
            """width: 250px;
              |padding: 10px;
              |font-size: 16px;
              |border: 1px solid #ccc;
              |border-radius: 5px;
              |margin-bottom: 10px;
            """.stripMargin
        ),

        button(
          "Iniciar Sesión",
          styleAttr := s"background-color: ${Estilos.colorPrimario}; color: white; border: none; padding: 10px; border-radius: 6px;",
          onClick --> { _ => login() }
        ),

        button(
          "Registrarse",
          styleAttr := s"background-color: ${Estilos.colorPrimario}; color: white; border: none; padding: 10px; border-radius: 6px;",
          onClick --> { _ =>
            currentView.set(RegistroView(currentView, librosVar))
          }
        ),

        button(
          "Volver a inicio",
          styleAttr := "background-color: #95a5a6; color: white; border: none; padding: 10px; border-radius: 6px;",
          onClick --> { _ =>
            currentView.set(PaginaPrincipal(currentView, librosVar))
          }
        )
      )
    )
  }
}