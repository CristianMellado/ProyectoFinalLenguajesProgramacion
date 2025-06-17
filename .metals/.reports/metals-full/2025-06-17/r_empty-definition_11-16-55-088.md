error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/PaginaPrincipal.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/PaginaPrincipal.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 350
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/PaginaPrincipal.scala
text:
```scala
def renderHomePage(): HtmlElement = {
    div(
      // Contenedor principal
      display.flex,
      flexDirection.column,
      fontFamily := "Arial, sans-serif",

      // Header con menú y botón usuario
      div(
        display.flex,
        justifyContent.spaceBetween,
        alignItems.center,
        backgroundColor := "#f5f5@@f5",
        padding := "10px 20px",
        borderBottom := "1px solid #ccc",

        // Botón menú hamburguesa
        button(
          "☰",
          onClick --> (_ => dom.window.alert("Ir al menú de filtro")),
          fontSize := "24px",
          backgroundColor := "transparent",
          border := "none",
          cursor.pointer
        ),

        // Botón icono usuario
        button(
          "👤",
          onClick --> (_ => dom.window.alert("Ir a Login")),
          fontSize := "24px",
          backgroundColor := "transparent",
          border := "none",
          cursor.pointer
        )
      ),

      // Mosaico de productos
      div(
        display.flex,
        flexWrap.wrap,
        justifyContent.center,
        styleAttr := "gap: 15px; padding: 20px;",

        renderProduct("El Quijote", "quijote.jpg", 9.99),
        renderProduct("1984", "1984.jpg", 12.5),
        renderProduct("Orgullo y Prejuicio", "orgullo.jpg", 8.0),
        renderProduct("Cien Años de Soledad", "cien.jpg", 11.0)
      )
    )
```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.