package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object ProductView {
  def apply(
    currentView: Var[HtmlElement],
    libro: PaginaPrincipal.Libro,
    personaVar: Var[Option[js.Dynamic]],
    logout: () => Unit
  ): HtmlElement = {
    // Estado para detalles (si necesitas cargar más detalles, aquí)
    val detalles = Var(libro)

    div(
      button("Volver", onClick --> { _ => currentView.set(ClientView(currentView, Var(List.empty), personaVar, logout)) }),
      button("Cerrar sesión", onClick --> { _ => logout() }),
      div(
        styleAttr := "display: flex; flex-direction: column; align-items: center; background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 16px rgba(0,0,0,0.10); padding: 36px 24px; max-width: 420px; margin: 40px auto;",
        img(
          src := s"https://99z5gqlq-8081.brs.devtunnels.ms/frontimg/imagen/${libro.nombreimagen}",
          alt := libro.nombre,
          width := "220",
          height := "320",
          styleAttr := "border-radius: 12px; margin-bottom: 18px; box-shadow: 0 2px 12px rgba(0,0,0,0.12); object-fit: cover;"
        ),
        h2(libro.nombre, styleAttr := "font-size: 2rem; color: #222; margin-bottom: 10px; font-weight: 700; text-align: center;"),
        div(libro.nombre_categoria, styleAttr := "color: #636e72; font-size: 1.1rem; margin-bottom: 18px; font-weight: 500;"),
        div(
          styleAttr := "display: flex; align-items: center; gap: 10px; margin-bottom: 12px;",
          b("Precio:"),
          span(f"${libro.precio}%.2f", styleAttr := "color: #0984e3; font-size: 1.25rem; font-weight: bold; margin-left: 4px;"),
          span("$", styleAttr := "color: #636e72; font-size: 1.1rem; font-weight: 500;")
        ),
        button(
          "Comprar",
          onClick --> { _ =>
            currentView.set(CompraView(currentView, libro, personaVar, logout))
          },
          styleAttr := "background: linear-gradient(90deg, #00b894 60%, #0984e3 100%); color: white; border: none; border-radius: 8px; padding: 13px 32px; font-size: 1.1rem; cursor: pointer; font-weight: 700; margin-top: 28px; letter-spacing: 0.5px; box-shadow: 0 1px 6px rgba(0,0,0,0.10); transition: background 0.2s;"
        )
      )
    )
  }
}
