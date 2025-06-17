error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/Main.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/Main.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -com/raquo/laminar/api/L.textAlign.
	 -textAlign.
	 -scala/Predef.textAlign.
offset: 2982
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/Main.scala
text:
```scala
package app

import com.raquo.laminar.api.L._
import org.scalajs.dom

object Main {

  def main(args: Array[String]): Unit = {
    // Se usa un Var para manejar el "estado de navegación" de la app
    val currentPage = Var("home")

    val appContainer = div(
      // Usamos child <-- para que el contenido cambie según la página actual
      child <-- currentPage.signal.map {
        case "home"   => renderHomePage(currentPage)
        case "login"  => renderLoginPage(currentPage)
        case "filter" => renderFilterPage(currentPage)
        case _        => div("Página no encontrada")
      }
    )

    render(dom.document.body, appContainer)
  }

  // Vista: Página Principal (Home)
  def renderHomePage(navigate: Var[String]): HtmlElement = {
    div(
      cls := "home-page",
      // Top bar
      div(
        display.flex,
        justifyContent.spaceBetween,
        padding := "10px",
        backgroundColor := "#f5f5f5",
        borderBottom := "1px solid #ccc",

        // Botón de menú
        button(
          "☰", // símbolo de 3 rayitas
          onClick.mapTo("filter") --> navigate
        ),

        // Botón login
        button(
          "👤", // ícono personita
          onClick.mapTo("login") --> navigate
        )
      ),

      // Zona de productos
      div(
        display.flex,
        flexWrap.wrap,
        gap := "15px",
        padding := "20px",
        justifyContent.center,
        // Lista simulada de productos (puedes luego traer esto del backend)
        renderProduct("El Quijote", "quijote.jpg", 9.99),
        renderProduct("1984", "1984.jpg", 12.5),
        renderProduct("Orgullo y Prejuicio", "orgullo.jpg", 8.0),
        renderProduct("Cien Años de Soledad", "cien.jpg", 11.0)
      )
    )
  }

  // Vista: Login
  def renderLoginPage(navigate: Var[String]): HtmlElement = {
    div(
      h2("Iniciar Sesión"),
      label("Nombre: "),
      input(cls := "input-nombre"),
      br(),
      label("Contraseña: "),
      input(cls := "input-pass", typ := "password"),
      br(),
      button("Iniciar sesión"),
      button("Registrarse"),
      br(),
      button("← Volver", onClick.mapTo("home") --> navigate)
    )
  }

  // Vista: Filtros
  def renderFilterPage(navigate: Var[String]): HtmlElement = {
    div(
      h2("Filtro de Búsqueda"),
      label("Categoría: "),
      input(),
      br(),
      label("Precio máximo: "),
      input(typ := "number"),
      br(),
      label("Orden A-Z: "),
      select(
        option("Sí"),
        option("No")
      ),
      br(),
      button("← Volver", onClick.mapTo("home") --> navigate)
    )
  }

  // Componente: Tarjeta de producto
  def renderProduct(nombre: String, img: String, precio: Double): HtmlElement = {
    div(
      width := "180px",
      border := "1px solid #ccc",
      borderRadius := "10px",
      padding := "10px",
      textA@@lign.center,
      backgroundColor := "#fff",
      boxShadow := "0 0 10px rgba(0,0,0,0.1)",

      img(src := s"assets/$img", width := "150px", height := "200px"),
      h4(nombre),
      span(s"$precio USD")
    )
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.