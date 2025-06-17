error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/Main.scala:
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/Main.scala
empty definition using pc, found symbol in pc: 
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 461
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/Main.scala
text:
```scala
package app

import com.raquo.laminar.api.L._

import org.scalajs.dom

object Main {
  def main(args: Array[String]): Unit = {
    val rootElement = div(
        h2("Iniciar Sesión"),
        label("Nombre: "),
        input(cls := "input-nombre"),
        br(),
        label("Contraseña: "),
        input(cls := "input-pass", typ := "password"),
        br(),
        button("Iniciar sesión"),
        button("Registrarsee")
    )
  }
}
@@
```


#### Short summary: 

empty definition using pc, found symbol in pc: 