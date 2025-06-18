package app.views

import com.raquo.laminar.api.L._
import app.views.Estilos

object RegistroView {
  def apply(currentView: Var[HtmlElement], librosVar: Var[List[PaginaPrincipal.Libro]]): HtmlElement = {

    val nombreVar = Var("")
    val dniVar = Var("")
    val correoVar = Var("")
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
          "Confirmar Registro",
          styleAttr := s"background-color: ${Estilos.colorPrimario}; color: white; border: none; padding: 10px; border-radius: 6px;",
          onClick --> { _ =>
            println(s"Nombre: ${nombreVar.now()}")
            println(s"DNI: ${dniVar.now()}")
            println(s"Correo: ${correoVar.now()}")
            println(s"Contraseña: ${contrasenaVar.now()}")
            currentView.set(PaginaPrincipal(currentView, librosVar))
          }
        ),

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
