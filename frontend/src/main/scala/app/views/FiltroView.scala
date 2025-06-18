package app.views

import com.raquo.laminar.api.L._
import app.views.PaginaPrincipal.Libro

object FiltroView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[Libro]]
  ): HtmlElement = {

    div(
      styleAttr := """
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f2f2f2;
      """,
      div(
        styleAttr := """
          background-color: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 300px;
        """,
        h2("Filtrar productos", styleAttr := "text-align: center; color: #333;"),

        div(
          label("Categoría: ", styleAttr := "margin-bottom: 5px;"),
          select(
            styleAttr := "padding: 8px; border-radius: 5px; width: 100%;",
            option("Todos"),
            option("Tecnología"),
            option("Ciencia"),
            option("Ficción")
          )
        ),

        div(
          label("Precio (hasta): ", styleAttr := "margin-bottom: 5px;"),
          input(
            typ := "range",
            minAttr := "0",
            maxAttr := "100",
            styleAttr := "width: 100%;"
          )
        ),

        div(
          label("Ordenar por: ", styleAttr := "margin-bottom: 5px;"),
          select(
            styleAttr := "padding: 8px; border-radius: 5px; width: 100%;",
            option("A-Z"),
            option("Z-A")
          )
        ),

        button(
          "Aplicar Filtros",
          styleAttr := """
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
          """
        ),

        button(
          "Volver a inicio",
          onClick --> { _ => currentView.set(PaginaPrincipal(currentView, librosVar)) },
          styleAttr := """
            background-color: #95a5a6;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
          """
        )
      )
    )
  }
}
