package app.views

import app.views.{AgregarView, EliminarView, ReporteView, AnadirAdminView, PaginaPrincipal}
import com.raquo.laminar.api.L._
import org.scalajs.dom
import com.raquo.laminar.nodes.ReactiveHtmlElement
import org.scalajs.dom.html

object AdminView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[PaginaPrincipal.Libro]] // Asumiendo PaginaPrincipal.Libro es el tipo correcto
  ): HtmlElement = {

    val adminEmail = dom.window.localStorage.getItem("email")

    // --- Helper function for Admin Tiles ---
    def adminTile(text: String, iconCode: String, bgColor: String, onClickAction: => Unit) = {
      // Define reactive state for hover effects for each tile
      val isHovered = Var(false)

      button(
        // Conditional style based on hover state
        styleAttr <-- isHovered.signal.map { hovered =>
          val baseStyle = s"""
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px 20px;
            background-color: $bgColor;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.3em;
            font-weight: 500;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
            text-decoration: none;
          """
          if (hovered) {
            s"$baseStyle transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0,0,0,0.2);"
          } else {
            s"$baseStyle transform: translateY(0); box-shadow: 0 4px 8px rgba(0,0,0,0.1);"
          }
        },
        // Event handlers for mouse enter/leave to update isHovered
        // CORRECTED: Use --> to update the Var directly
        onMouseOver --> { _ => isHovered.set(true) },
        onMouseOut --> { _ => isHovered.set(false) },
        onClick --> { _ => onClickAction },
        i(
          styleAttr := s"font-family: 'Font Awesome 6 Free'; font-weight: 900; font-size: 3em; margin-bottom: 15px; content: '$iconCode';"
        ),
        span(text)
      )
    }
    // --- End Helper function ---

    div(
      // contenedor general
      styleAttr := """
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        background-color: #f0f2f5;
      """,

      // Barra superior
      div(
        styleAttr := """
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 25px;
          background-color: #3498db;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          color: white;
          position: relative;
          overflow: hidden;
        """,
        // Elemento decorativo en la barra superior (onda sutil)
        div(
          styleAttr := """
            position: absolute;
            bottom: -30px;
            left: 0;
            width: 100%;
            height: 60px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50% 50% 0 0;
            transform: rotate(-3deg);
            transform-origin: bottom center;
            z-index: 0;
          """
        ),
        span(
          styleAttr := "font-size: 1.3em; font-weight: 500; z-index: 1;",
          s"Panel de Administración: $adminEmail"
        ),
        button(
          "Cerrar Sesión",
          // Reactive hover effect for Logout button
          // CORRECTED: Use a Var to manage the hover state for the logout button
          // instead of merging event streams directly for styleAttr.
          {
            val isLogoutHovered = Var(false)
            Seq(
              styleAttr <-- isLogoutHovered.signal.map { hovered =>
                val baseStyle = """
                  color: white;
                  border: none;
                  padding: 8px 15px;
                  border-radius: 5px;
                  cursor: pointer;
                  font-size: 0.95em;
                  transition: background-color 0.2s ease;
                  z-index: 1;
                """
                if (hovered) {
                  s"$baseStyle background-color: #c0392b;" // Darker red on hover
                } else {
                  s"$baseStyle background-color: #e74c3c;" // Original red
                }
              },
              onMouseOver --> { _ => isLogoutHovered.set(true) },
              onMouseOut --> { _ => isLogoutHovered.set(false) }
            )
          },
          onClick --> { _ =>
            dom.window.localStorage.removeItem("rol")
            dom.window.localStorage.removeItem("id_persona")
            dom.window.localStorage.removeItem("email")
            dom.window.alert("Sesión cerrada correctamente.")
            currentView.set(PaginaPrincipal(currentView, librosVar))
          }
        )
      ),

      // Contenido central del panel
      div(
        styleAttr := """
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        """,

        div(
          styleAttr := """
            background-color: #fff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            max-width: 800px;
            width: 100%;
            text-align: center;
          """,

          h2(
            styleAttr := """
              grid-column: 1 / -1;
              margin-bottom: 25px;
              color: #333;
              font-size: 2em;
              border-bottom: 2px solid #eee;
              padding-bottom: 15px;
            """,
            "Panel de Administrador"
          ),

          // Uso de la función adminTile para cada opción con códigos Unicode de Font Awesome
          adminTile(
            "Agregar Producto",
            "\\f055", // Unicode for 'plus-circle'
            "#3498db",
            currentView.set(AgregarView(currentView, librosVar))
          ),
          adminTile(
            "Eliminar Producto",
            "\\f057", // Unicode for 'minus-circle'
            "#e74c3c",
            currentView.set(EliminarView(currentView, Var(List.empty[EliminarView.LibroCompleto])))
          ),
          adminTile(
            "Ver Reportes",
            "\\f200", // Unicode for 'chart-line'
            "#2ecc71",
            currentView.set(ReporteView(currentView, librosVar))
          ),
          adminTile(
            "Añadir Administrador",
            "\\f007", // Unicode for 'user-plus'
            "#9b59b6",
            currentView.set(AnadirAdminView(currentView, librosVar))
          )
        )
      )
    )
  }
}