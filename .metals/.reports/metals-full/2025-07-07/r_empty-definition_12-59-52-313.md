error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AdminView.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AdminView.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 303
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/AdminView.scala
text:
```scala
package app.views

import com.raquo.laminar.api.L._

object AdminView {
  def apply(
    currentView: Var[HtmlElement], 
    librosVar: Var[List[PaginaPrincipal.Libro]]
  ): HtmlElement = {

    div(
      styleAttr := """
        display: flex;
        justify-content: center;
        al@@ign-items: center;
        height: 100vh;
        background-color: #f0f2f5;
      """,
      
      div(
        styleAttr := """
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 300px;
          text-align: center;
        """,

        h2("Panel de Administrador"),

        button(
          "Agregar",
          styleAttr := """
            padding: 10px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          """,
          onClick --> { _ =>
            currentView.set(AgregarView(currentView, librosVar))
          }
        ),

        button(
          "Eliminar",
          styleAttr := """
            padding: 10px;
            background-color: #e74c3c;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          """,
          onClick --> { _ =>
            currentView.set(EliminarView(currentView, librosVar))
          }
        ),

        button(
          "Reporte",
          styleAttr := """
            padding: 10px;
            background-color: #2ecc71;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          """,
          onClick --> { _ =>
            currentView.set(ReporteView(currentView, librosVar))
          }
        ),

        button(
          "Añadir Admin",
          styleAttr := """
            padding: 10px;
            background-color: #9b59b6;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          """,
          onClick --> { _ =>
            currentView.set(AnadirAdminView(currentView, librosVar))
          }
        )
      )
    )
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.