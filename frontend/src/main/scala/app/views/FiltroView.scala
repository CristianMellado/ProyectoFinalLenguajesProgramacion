package app.views

import com.raquo.laminar.api.L._
import app.views.PaginaPrincipal.Libro

object FiltroView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[Libro]]
  ): HtmlElement = {

    div(
      styleAttr := "padding: 20px; display: flex; flex-direction: column; gap: 10px; align-items: start;",

      h2("Filtrar productos"),

      div(
        label("Categoría: "),
        select(
          option("Todos"),
          option("Tecnología"),
          option("Ciencia"),
          option("Ficción")
        )
      ),

      div(
        label("Precio (hasta): "),
        input(
          typ := "range",
          minAttr := "0",
          maxAttr := "100"
        )
      ),

      div(
        label("Ordenar por: "),
        select(
          option("A-Z"),
          option("Z-A")
        )
      ),

      button("Aplicar Filtros"),

      button(
        "Volver a inicio",
        onClick --> { _ =>
          currentView.set(PaginaPrincipal(currentView, librosVar))
        }
      )
    )
  }
}
