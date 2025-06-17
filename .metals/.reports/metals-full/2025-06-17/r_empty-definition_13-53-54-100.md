error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/LoginView.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/LoginView.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -com/raquo/laminar/api/L.currentView.
	 -currentView.
	 -scala/Predef.currentView.
offset: 1122
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/LoginView.scala
text:
```scala
package app.views

import com.raquo.laminar.api.L._

object LoginView {
  def apply(currentView: Var[HtmlElement]): HtmlElement = {
    val nombreVar = Var("")
    val passVar = Var("")

    div(
      h2("Iniciar Sesión"),

      label("Nombre: "),
      input(
        typ := "text",
        inContext(el => onInput.mapTo(el.ref.value) --> nombreVar.writer)
      ),
      br(),

      label("Contraseña: "),
      input(
        typ := "password",
        inContext(el => onInput.mapTo(el.ref.value) --> passVar.writer)
      ),
      br(),

      button(
        "Iniciar sesión",
        onClick --> { _ =>
          println(s"Iniciando sesión con ${nombreVar.now()} y ${passVar.now()}")
          // Redirecciona a la Página Principal tras login exitoso
          currentView.set(PaginaPrincipal(currentView))
        }
      ),

      button(
        "Registrarse",
        onClick --> { _ =>
          currentView.set(RegistroView(currentView))
        }
      ),

      br(),
      button(
        "Volver a la Página Principal",
        onClick --> { _ =>
          @@currentView.set(PaginaPrincipal(currentView, librosVar))
        }
      )
    )
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.