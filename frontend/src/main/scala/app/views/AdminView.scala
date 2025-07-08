package app.views

import app.views.{AgregarView, EliminarView, ReporteView, AnadirAdminView, PaginaPrincipal}
import com.raquo.laminar.api.L._
import org.scalajs.dom

object AdminView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[PaginaPrincipal.Libro]]
  ): HtmlElement = {

    val adminEmail = dom.window.localStorage.getItem("email")

    div(
      // contenedor general
      styleAttr := """
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: Roboto, sans-serif;
      """,

      // Barra superior
      div(
        styleAttr := """
          background-color: #34495e;
          color: white;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        """,
        span(s"Administrador: $adminEmail"),
        button(
          "Logout",
          styleAttr := """
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          """,
          onClick --> { _ =>
            dom.window.localStorage.removeItem("rol")
            dom.window.localStorage.removeItem("id_persona")
            dom.window.localStorage.removeItem("email")
            dom.window.alert("Sesión cerrada correctamente.")

            // Redirige a PaginaPrincipal como visitante (sin sesión)
            currentView.set(PaginaPrincipal(currentView, librosVar))
          }
        )
      ),

      // Contenido central
      div(
        styleAttr := """
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
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
            gap: 15px;
            width: 300px;
            text-align: center;
          """,

          h2("Panel de Administrador"),

          button(
            "Agregar",
            styleAttr := """
              padding: 10px;
              background-color: #3498db;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            """,
            onClick --> { _ =>
              currentView.set(AgregarView(currentView, librosVar))
            }
          ),

          button(
            "Eliminar",
            styleAttr := """
              padding: 10px;
              background-color: #e74c3c;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            """,
            onClick --> { _ =>
              currentView.set(EliminarView(currentView, Var(List.empty[EliminarView.LibroCompleto])))
            }
          ),

          button(
            "Reporte",
            styleAttr := """
              padding: 10px;
              background-color: #2ecc71;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            """,
            onClick --> { _ =>
              currentView.set(ReporteView(currentView, librosVar))
            }
          ),

          button(
            "Añadir Admin",
            styleAttr := """
              padding: 10px;
              background-color: #9b59b6;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            """,
            onClick --> { _ =>
              currentView.set(AnadirAdminView(currentView, librosVar))
            }
          )
        )
      )
    )
  }
}
