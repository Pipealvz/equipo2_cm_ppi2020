const express = require("express")
const path = require("path")
const morgan = require("morgan")
const app = express()

//Middelwares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use("/api", require("./routes/farmacia"))
app.use("/api", require("./routes/pedidos"))

app.get("/", (req, res) => {
  res.send("Equipo-2-cm-ppi")
})

app.set("puerto", 8090)

app.listen(app.get("puerto"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("puerto")}`)
})