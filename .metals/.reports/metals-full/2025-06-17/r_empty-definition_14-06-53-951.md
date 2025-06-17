error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/RegistroView.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/RegistroView.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -com/raquo/laminar/api/L.onInput.mapToValue.
	 -com/raquo/laminar/api/L.onInput.mapToValue#
	 -com/raquo/laminar/api/L.onInput.mapToValue().
	 -onInput/mapToValue.
	 -onInput/mapToValue#
	 -onInput/mapToValue().
	 -scala/Predef.onInput.mapToValue.
	 -scala/Predef.onInput.mapToValue#
	 -scala/Predef.onInput.mapToValue().
offset: 522
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/RegistroView.scala
text:
```scala
package app.views

import com.raquo.laminar.api.L._
import app.views.PaginaPrincipal.Libro

object RegistroView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[Libro]]
  ): HtmlElement = {

    val nombreVar = Var("")
    val contrasenaVar = Var("")

    div(
      styleAttr := "display: flex; flex-direction: column; align-items: center; padding: 20px; gap: 10px;",

      h2("Registrarse"),

      input(
        placeholder := "Nombre de usuario",
        onInput.mapToVa@@lue --> nombreVar.writer
      ),

      input(
        typ := "password",
        placeholder := "Contraseña",
        onInput.mapToValue --> contrasenaVar.writer
      ),

      button(
        "Registrarse",
        onClick --> { _ =>
          println(s"Registrado: ${nombreVar.now()}, ${contrasenaVar.now()}")
          currentView.set(PaginaPrincipal(currentView, librosVar)) // volver a la página principal
        }
      ),

      button(
        "Volver",
        onClick --> { _ =>
          currentView.set(PaginaPrincipal(currentView, librosVar)) // también puede ser usado como botón de cancelar
        }
      )
    )
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.