error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/ClientView.scala:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/ClientView.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -com/raquo/laminar/api/L.styleAttr.
	 -com/raquo/laminar/api/L.styleAttr#
	 -com/raquo/laminar/api/L.styleAttr().
	 -styleAttr.
	 -styleAttr#
	 -styleAttr().
	 -scala/Predef.styleAttr.
	 -scala/Predef.styleAttr#
	 -scala/Predef.styleAttr().
offset: 1847
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/frontend/src/main/scala/app/views/ClientView.scala
text:
```scala
package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object ClientView {
  def apply(
    currentView: Var[HtmlElement],
    librosVar: Var[List[PaginaPrincipal.Libro]],
    personaVar: Var[Option[js.Dynamic]],
    logout: () => Unit
  ): HtmlElement = {
    // Estado para los libros
    val libros = Var(List.empty[PaginaPrincipal.Libro])
    
    // Cargar libros al entrar
    Ajax.get(
      url = "https://99z5gqlq-8081.brs.devtunnels.ms/pagina/pagina_principal"
    ).map { xhr =>
      if (xhr.status == 200) {
        val arr = JSON.parse(xhr.responseText).asInstanceOf[js.Array[js.Dynamic]]
        val lista = arr.map { l =>
          PaginaPrincipal.Libro(
            id_libro = l.id_libro.asInstanceOf[Int],
            nombre = l.nombre.toString,
            precio = l.precio.asInstanceOf[Double],
            id_categoria = l.id_categoria.toString,
            nombre_categoria = l.nombre_categoria.toString,
            nombrepdf = l.nombrepdf.toString,
            nombreimagen = l.nombreimagen.toString
          )
        }.toList
        libros.set(lista)
      } else {
        dom.window.alert("Error cargando libros: " + xhr.status)
      }
    }.recover { case ex =>
      dom.window.alert("Error conectando con el servidor: " + ex.getMessage)
    }

    div(
      h2("Bienvenido, " + personaVar.now().flatMap(p => Option(p.nombre).map(_.toString)).getOrElse("Usuario")),
      button("Cerrar sesión", onClick --> { _ => logout() }),
      hr(),
      child <-- libros.signal.map { lista =>
        if (lista.isEmpty) div("No hay libros disponibles.")
        else
          div(
            s@@tyleAttr := "display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 32px; justify-items: center; padding: 30px 10px; background: #f8fafc; border-radius: 12px;",
            lista.map { libro =>
              div(
                styleAttr := "width: 250px; border: 1px solid #dfe6e9; border-radius: 16px; padding: 18px 14px; text-align: center; background-color: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.08); transition: box-shadow 0.2s; cursor: pointer; position: relative; overflow: hidden; margin-bottom: 10px;",
                img(
                  src := s"https://99z5gqlq-8081.brs.devtunnels.ms/frontimg/imagen/${libro.nombreimagen}",
                  alt := libro.nombre,
                  width := "170",
                  height := "240",
                  styleAttr := "border-radius: 10px; margin-bottom: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.10); object-fit: cover; object-position: top center; max-width: 100%; max-height: 240px; display: block; margin-left: auto; margin-right: auto; background: #f1f2f6;"
                ),
                h4(libro.nombre, styleAttr := "font-size: 1.15rem; color: #222; margin: 12px 0 6px 0; font-weight: 700; min-height: 48px;"),
                p(libro.nombre_categoria, styleAttr := "color: #636e72; font-size: 1rem; margin-bottom: 8px; font-weight: 500;"),
                div(
                  styleAttr := "display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 10px;",
                  span("Precio:", styleAttr := "color: #636e72; font-size: 0.98rem;"),
                  span(f"${libro.precio}%.2f", styleAttr := "color: #0984e3; font-size: 1.15rem; font-weight: bold;")
                ),
                button("Ver detalles", styleAttr := "background: linear-gradient(90deg, #00b894 60%, #0984e3 100%); color: white; border: none; border-radius: 6px; padding: 9px 20px; font-size: 1rem; cursor: pointer; font-weight: 600; margin-top: 10px; letter-spacing: 0.5px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); transition: background 0.2s;",
                  onClick --> { _ => currentView.set(ProductView(currentView, libro, personaVar, logout)) }
                )
              )
            }
          )
      }
    )
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.