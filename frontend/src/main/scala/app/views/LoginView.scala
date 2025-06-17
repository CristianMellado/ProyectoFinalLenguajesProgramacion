package app.views

import com.raquo.laminar.api.L._
import app.views.PaginaPrincipal.Libro

object LoginView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[Libro]]
  ): HtmlElement = {

    val usuarioVar = Var("")
    val contrasenaVar = Var("")

    div(
      styleAttr := "display: flex; flex-direction: column; align-items: center; padding: 20px; gap: 10px;",

      h2("Iniciar Sesión"),

      input(
        placeholder := "Usuario",
        onInput.mapToValue --> usuarioVar.writer
      ),

      input(
        typ := "password",
        placeholder := "Contraseña",
        onInput.mapToValue --> contrasenaVar.writer
      ),

      button(
        "Iniciar Sesión",
        onClick --> { _ =>
          println(s"Intentando iniciar sesión con: ${usuarioVar.now()} - ${contrasenaVar.now()}")
          currentView.set(PaginaPrincipal(currentView, librosVar))
        }
      ),

      button(
        "Registrarse",
        onClick --> { _ =>
          currentView.set(RegistroView(currentView, librosVar))
        }
      ),

      button(
        "Volver a inicio",
        onClick --> { _ =>
          currentView.set(PaginaPrincipal(currentView, librosVar))
        }
      )
    )
  }
}
