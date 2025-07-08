package app.views
import com.raquo.laminar.api.L._
object PaginaPrincipal {

  case class Libro(titulo: String, precio: String, imagen: String)

  //lista base original
  val librosIniciales: List[Libro] = List(
    Libro("Aprende Scalaa", "$20", "/assets/aprende_scala.jpg"),
    Libro("El Principito", "$25", "/assets/el_principito.jpg"),
    Libro("100 años de soledad", "$30", "/assets/100.jpg"),
    Libro("Cienciología", "$28", "assets/libro4.png"),
    Libro("Física Cuántica", "$35", "assets/libro5.png"),
    Libro("Historia Universal", "$22", "assets/libro6.png")
  )

  def apply(currentView: Var[HtmlElement], librosVar: Var[List[Libro]]): HtmlElement = {
    div(
      div(
        styleAttr := """
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background-color: #3498db;           /* azul moderno */
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          color: white;
        """,
        button("☰", 
        styleAttr := """
          background: transparent;
          border: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
        """,
        onClick --> (_ => currentView.set(FiltroView(currentView, librosVar)))),
        button(
          "👤",
          styleAttr := """
            background: #2980b9;
            border: none;
            border-radius: 5px;
            padding: 8px 12px;
            font-size: 16px;
            color: white;
            cursor: pointer;
          """,
          onClick --> { _ =>
            currentView.set(LoginView(currentView, librosVar))
          }
        )
      ),

      div(
        styleAttr := "display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; justify-items: center; padding: 20px;",
        children <-- librosVar.signal.map(_.map { libro =>
          div(
            styleAttr := "width: 180px; border: 1px solid #ccc; border-radius: 10px; padding: 10px; text-align: center; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.1);",
            img(src := libro.imagen, widthAttr := 150, heightAttr := 200),
            h4(libro.titulo),
            p(libro.precio)
          )
        })
      )
    )
  }
}
