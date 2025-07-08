package app

import com.raquo.laminar.api.L._
import org.scalajs.dom
import app.views.{LoginView, RegistroView, PaginaPrincipal, FiltroView}

object Main {
  def main(args: Array[String]): Unit = {
    // 1. Variable de libros
    val librosVar = Var(
      List(
        PaginaPrincipal.Libro(1, "Aprende Scala", 20.0, "1", "Programación", "libro1.pdf", "assets/libro1.jpg"),
        PaginaPrincipal.Libro(2, "El Principito", 25.0, "2", "Literatura", "libro2.pdf", "assets/libro2.jpg"),
        PaginaPrincipal.Libro(3, "100 años de soledad", 30.0, "2", "Literatura", "100.pdf", "assets/100.jpg"),
        PaginaPrincipal.Libro(4, "Crónica de una muerte", 22.0, "2", "Literatura", "libro3.pdf", "assets/libro3.jpg"),
        PaginaPrincipal.Libro(5, "Cien Ciencias", 28.0, "3", "Ciencia", "libro4.pdf", "assets/libro4.jpg"),
        PaginaPrincipal.Libro(6, "Magia y Realismo", 35.0, "2", "Literatura", "libro5.pdf", "assets/libro5.jpg")
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
