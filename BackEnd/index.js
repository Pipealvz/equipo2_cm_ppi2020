const express = require("express")
const path = require("path")
const morgan = require("morgan")
const app = express()

//Middelwares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use("/api", require("./routes/farmacia"))
//app.use("/api", require("./routes/pedidos"))
//app.use("/api", require("./routes/historial"))
//app.use("/api/usuarios", require("./routes/usuario_cliente"))
//app.use("/api", require("./routes/favorito"))
//app.use("/api", require("./routes/notificaciones"))

app.get("/", (req, res) => {
  res.send("Equipo-2-cm-ppi")
})

app.set("puerto", 8090)

app.listen(app.get("puerto"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("puerto")}`)
})