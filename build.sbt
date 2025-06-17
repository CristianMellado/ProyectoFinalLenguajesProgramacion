import org.scalajs.sbtplugin.ScalaJSPlugin

lazy val frontend = (project in file("frontend"))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    scalaVersion := "2.13.13",
    scalaJSUseMainModuleInitializer := true,
    libraryDependencies += "com.raquo" %%% "laminar" % "16.0.0"
  )

lazy val root = (project in file("."))
  .aggregate(frontend)