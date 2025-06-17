error id: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/build.sbt:`<none>`.
file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/build.sbt
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -frontend.
	 -frontend#
	 -frontend().
	 -scala/Predef.frontend.
	 -scala/Predef.frontend#
	 -scala/Predef.frontend().
offset: 354
uri: file:///D:/Documentos/UCSP/2025-1/LP/Ecommerce_Scala/build.sbt
text:
```scala
import org.scalajs.sbtplugin.ScalaJSPlugin

lazy val frontend = project.in(file("frontend"))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    scalaVersion := "2.13.13",
    scalaJSUseMainModuleInitializer := true,
    libraryDependencies += "com.raquo" %%% "laminar" % "16.0.0"
  )

lazy val root = (project in file("."))
  .aggregate(frontend@@)

```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.