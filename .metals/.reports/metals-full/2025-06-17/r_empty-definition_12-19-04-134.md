error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/FiltroView.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/FiltroView.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 745
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/FiltroView.scala
text:
```scala
package app.views

import com.raquo.laminar.api.L._

object FiltroView {
  def apply(currentView: Var[HtmlElement]): HtmlElement = {
    div(
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
      br(),
      div(
        label("Precio (hasta): "),
        input(
          typ := "range",
          minAttr := "0",
          maxAttr := "100"
        )
      ),
      br(),
      div(
        label("Ordenar por: "),
        select(
          option("A-Z"),
          option("Z-A")
        )
      ),
      br(),
      button("Aplicar F@@iltros")
    )
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.