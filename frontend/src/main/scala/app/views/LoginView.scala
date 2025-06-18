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

        h2("Iniciar Sesión", styleAttr := "text-align: center;"),

        input(
          placeholder := "Usuario",
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
          onClick --> { _ =>
            println(s"Intentando iniciar sesión con: ${usuarioVar.now()} - ${contrasenaVar.now()}")
            currentView.set(PaginaPrincipal(currentView, librosVar))
          }
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
          styleAttr := "background-color: #95a5a6;; color: white; border: none; padding: 10px; border-radius: 6px;",
          onClick --> { _ =>
            currentView.set(PaginaPrincipal(currentView, librosVar))
          }
        )
      )  
    )
  }
}
