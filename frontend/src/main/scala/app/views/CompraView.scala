package app.views

import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.ext.Ajax
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue

object CompraView {
  def apply(
    currentView: Var[HtmlElement],
    libro: PaginaPrincipal.Libro,
    personaVar: Var[Option[js.Dynamic]],
    logout: () => Unit
  ): HtmlElement = {
    val numeroTarjetaVar = Var("")
    val cvvVar = Var("")
    val mensajeVar = Var(Option.empty[String])

    def comprar(): Unit = {
      val idLibro = libro.id_libro
      val idPersona = personaVar.now().map(p => p.id_persona.toString).getOrElse("")
      val numero = numeroTarjetaVar.now()
      val cvv = cvvVar.now()
      val data = js.Dynamic.literal(
        id_libro = idLibro,
        id_persona = idPersona,
        numero = numero,
        cvv_numero = cvv
      )
      Ajax
        .post(
          url = "https://99z5gqlq-8081.brs.devtunnels.ms/comprarlibro/comprar",
          data = JSON.stringify(data),
          headers = Map("Content-Type" -> "application/json")
        )
        .map { xhr =>
          if (xhr.status == 200) {
            val response = JSON.parse(xhr.responseText)
            mensajeVar.set(Some(response.ok.toString))
          } else {
            mensajeVar.set(Some("Error en la compra: " + xhr.status))
          }
        }
        .recover { case ex =>
          mensajeVar.set(Some("Error conectando con el servidor: " + ex.getMessage))
        }
    }

    div(
      button("Volver", onClick --> { _ => currentView.set(ProductView(currentView, libro, personaVar, logout)) }),
      button("Cerrar sesión", onClick --> { _ => logout() }),
      div(
        styleAttr := "display: flex; flex-direction: column; align-items: center; background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 16px rgba(0,0,0,0.10); padding: 36px 24px; max-width: 420px; margin: 40px auto;",
        img(
          src := s"https://99z5gqlq-8081.brs.devtunnels.ms/frontimg/imagen/${libro.nombreimagen}",
          alt := libro.nombre,
          width := "180",
          height := "260",
          styleAttr := "border-radius: 12px; margin-bottom: 18px; box-shadow: 0 2px 12px rgba(0,0,0,0.12); object-fit: cover;"
        ),
        h2(libro.nombre, styleAttr := "font-size: 1.5rem; color: #222; margin-bottom: 10px; font-weight: 700; text-align: center;"),
        div(libro.nombre_categoria, styleAttr := "color: #636e72; font-size: 1.1rem; margin-bottom: 18px; font-weight: 500;"),
        div(
          styleAttr := "display: flex; align-items: center; gap: 10px; margin-bottom: 12px;",
          b("Precio:"),
          span(f"${libro.precio}%.2f", styleAttr := "color: #0984e3; font-size: 1.15rem; font-weight: bold; margin-left: 4px;"),
          span("$", styleAttr := "color: #636e72; font-size: 1.1rem; font-weight: 500;")
        ),
        div(

        ),
        form(
          onSubmit.preventDefault.mapTo(()) --> { _ => comprar() },
          div(
            label("Número de tarjeta:"),
            input(
              typ := "text",
              placeholder := "Número de tarjeta",
              styleAttr := "margin-bottom: 10px; padding: 8px; border-radius: 6px; border: 1px solid #b2bec3; width: 100%; font-size: 1rem;",
              onInput.mapToValue --> numeroTarjetaVar.writer,
              value <-- numeroTarjetaVar.signal
            )
          ),
          div(
            label("CVV:"),
            input(
              typ := "password",
              placeholder := "CVV",
              styleAttr := "margin-bottom: 18px; padding: 8px; border-radius: 6px; border: 1px solid #b2bec3; width: 100px; font-size: 1rem;",
              onInput.mapToValue --> cvvVar.writer,
              value <-- cvvVar.signal
            )
          ),
          button("Comprar", typ := "submit", styleAttr := "background: linear-gradient(90deg, #00b894 60%, #0984e3 100%); color: white; border: none; border-radius: 8px; padding: 13px 32px; font-size: 1.1rem; cursor: pointer; font-weight: 700; margin-top: 10px; letter-spacing: 0.5px; box-shadow: 0 1px 6px rgba(0,0,0,0.10); transition: background 0.2s;")
        ),
        child.maybe <-- mensajeVar.signal.map(_.map(msg => div(msg, styleAttr := "margin-top: 20px; color: #2980b9; font-size: 1.1rem; font-weight: 500;")))
      )
    )
  }
}
