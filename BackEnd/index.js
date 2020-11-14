const express = require("express")
const path = require("path")
const morgan = require("morgan")
const app = express()

app.get('/api',(req,res) => {
  res.send("URL: /farmacia")
})

//Middelwares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use("/api", require("./routes/Farmacias"))
app.use("/api", require("./routes/Pedido"))

app.get("/", (req, res) => {
  res.send(" {  API : Equipo-2-cm-ppi }")
})

app.set("puerto", 8090)

app.listen(app.get("puerto"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("puerto")}`)
})