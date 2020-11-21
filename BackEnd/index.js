const express = require("express")
const path = require("path")
const morgan = require("morgan")
const cors = require('cors')
const app = express()
require('dotenv').config()

app.get("/", (req, res) => {
  res.send(" {  API : Equipo-2-cm-ppi }")
})

app.get('/api',(req,res) => {
  res.send("URL: /farmacia /pedido /usuario")
})

//Middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'));
app.use(cors())

//Routes
app.use("/api", require("./routes/Farmacias"))
app.use("/api", require("./routes/Pedido"))
app.use("/api", require("./routes/Usuario_cliente"))
app.use("/api", require("./routes/historial"))

app.set('port',process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
})

/* git subtree push --prefix BackEnd heroku master
  PUSH HEROKU
*/
