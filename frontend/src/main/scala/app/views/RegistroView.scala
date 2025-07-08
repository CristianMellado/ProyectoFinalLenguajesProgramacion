package app.views

import com.raquo.laminar.api.L._
import app.views.Estilos
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object RegistroView {
  def apply(currentView: Var[HtmlElement], librosVar: Var[List[PaginaPrincipal.Libro]]): HtmlElement = {

    val nombreVar = Var("")
    val dniVar = Var("")
    val correoVar = Var("")
    val contrasenaVar = Var("")
    val mensajeVar = Var(Option.empty[String])

    def registrarCliente(): Unit = {
      val data = js.Dynamic.literal(
        nombre = nombreVar.now(),
        dni = dniVar.now(),
        correo = correoVar.now(),
        contrasena = contrasenaVar.now()
      )
      Ajax
        .post(
          url = "https://99z5gqlq-8081.brs.devtunnels.ms/persona/registrarcliente",
          data = JSON.stringify(data),
          headers = Map("Content-Type" -> "application/json")
        )
        .map { xhr =>
          if (xhr.status == 200) {
            mensajeVar.set(Some("Registro válido. ¡Bienvenido!"))
            js.timers.setTimeout(1800) {
              currentView.set(LoginView(currentView, librosVar))
            }
          } else {
            mensajeVar.set(Some(s"Error al registrar: ${xhr.status}"))
          }
        }
        .recover { case ex =>
          mensajeVar.set(Some("Error de red: " + ex.getMessage))
        }
    }

    div(
      // Este div centrará el contenido
      styleAttr := """
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f9f9f9;
      """,

      // Este es el formulario en sí
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

        h2("Registro de usuario", styleAttr := "text-align: center;"),

        label("Nombre:"),
        input(
          typ := "text",
          onInput.mapToValue --> nombreVar.writer,
          styleAttr := 
            """width: 250px;
              |padding: 10px;
              |font-size: 16px;
              |border: 1px solid #ccc;
              |border-radius: 5px;
              |margin-bottom: 10px;
            """.stripMargin
        ),

        label("DNI:"),
        input(
          typ := "text",
          onInput.mapToValue --> dniVar.writer,
          styleAttr := 
            """width: 250px;
              |padding: 10px;
              |font-size: 16px;
              |border: 1px solid #ccc;
              |border-radius: 5px;
              |margin-bottom: 10px;
            """.stripMargin
        ),

        label("Correo:"),
        input(
          typ := "email",
          onInput.mapToValue --> correoVar.writer,
          styleAttr := 
            """width: 250px;
              |padding: 10px;
              |font-size: 16px;
              |border: 1px solid #ccc;
              |border-radius: 5px;
              |margin-bottom: 10px;
            """.stripMargin
        ),

        label("Contraseña:"),
        input(
          typ := "password",
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
          "Registrarse",
          onClick.preventDefault --> { _ => registrarCliente() },
          styleAttr := "background: #0984e3; color: white; border: none; border-radius: 5px; padding: 12px; font-size: 16px; cursor: pointer; margin-top: 10px;"
        ),
        child.maybe <-- mensajeVar.signal.map(_.map(msg => div(msg, styleAttr := "color: #00b894; margin-top: 10px; text-align: center; font-weight: 500;"))),

        button(
          "Volver a Inicio",
          styleAttr := s"background-color: #95a5a6; color: white; border: none; padding: 10px; border-radius: 6px;",
          onClick --> { _ =>
            currentView.set(PaginaPrincipal(currentView, librosVar))
          }
        )
      )
    )
  }
}
