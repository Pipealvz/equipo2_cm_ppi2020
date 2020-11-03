const {Router} = require('express');
const router = Router();
const fs = require('fs')
const FileUsuario = fs.readFileSync('./cliente_usuario.json','utf-8')
const JSONcliente = JSON.parse(FileUsuario)

router.get("/", (req, res) => {
  res.send("API-FARMACIA")
})

router.get("/clientes", (req, res) => {
  res.json(JSONcliente)
})