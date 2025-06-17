package app

import com.raquo.laminar.api.L._
import org.scalajs.dom
import app.views.{LoginView, RegistroView, PaginaPrincipal, FiltroView}

object Main {
  def main(args: Array[String]): Unit = {
    // 1. Variable de libros
    val librosVar = Var(
      List(
        PaginaPrincipal.Libro("Aprende Scala", "$20", "assets/libro1.jpg"),
        PaginaPrincipal.Libro("El Principito", "$25", "assets/libro2.jpg"),
        PaginaPrincipal.Libro("100 años de soledad", "$30", "assets/100.jpg"),
        PaginaPrincipal.Libro("Crónica de una muerte", "$22", "assets/libro3.jpg"),
        PaginaPrincipal.Libro("Cien Ciencias", "$28", "assets/libro4.jpg"),
        PaginaPrincipal.Libro("Magia y Realismo", "$35", "assets/libro5.jpg")
      )
    )

    // 2. Inicializar correctamente con una vista válida (no null ni emptyNode)
    val currentView: Var[HtmlElement] =
      Var(PaginaPrincipal(currentView = null, librosVar)) // temporal null

    // 3. Asignar correctamente luego de creada la variable
    currentView.set(PaginaPrincipal(currentView, librosVar))

    render(
      dom.document.body,
      div(
        styleAttr := "font-family: 'Roboto', sans-serif;",
        child <-- currentView
        )
    )
  }
}
