const { Router } = require("express")
const router = Router()
const fs = require("fs")
<<<<<<< HEAD
const FileFarmacia = fs.readFileSync('./farmacia.js', 'utf-8')
const JSONFarmacia = JSON.parse(FileFarmacia)
=======
const FileFarmacia = fs.readFileSync('./farmacias.json', 'utf-8')
const JSONfarmacia = JSON.parse(FileFarmacia)
>>>>>>> aef21372adf436c4366b5bff1996f317cddde857

router.get("/", (req, res) => {
  res.send("USE URL; /farmacia /usuarios /pedidos /historial /favoritos")
})

router.get("/farmacia", (req, res) => {
  res.json(JSONfarmacia)
})

router.post("/farmacia", (req, res) => {
  let id = JSONfarmacia.length + 1
  let { correo, nit, combre, rol, contraseña } = req.body
  let nuevaFarmacia = {
    "id_farmacia": id,
    "correo": correo,
    "nit": nit,
    "nombre":nombre,
    "rol": rol,
    "contraseña": contraseña
  }

  JSONfarmacia.push(nuevaFarmacia)
  fs.writeFileSync('./farmacias.json', JSON.stringify(JSONfarmacia), 'utf-8')
  res.status(201).json(nuevaFarmacia)
})

router.get("/farmacia/:id", (req, res) => {
  let id = req.params.id
  let farmaciaEncontrada = JSONfarmacia.find(farmacia => farmacia.id == id)

  if (estudianteEncontrado != undefined)
    res.status(200).json(farmaciaEncontrada)
  else
    res.json(`La farmacia ${id} no existe`)
})

router.put("/farmacia/:id", (req,res) => {
  let id_farmacia = req.params.id 
  let {correo, nit, nombre, rol, contraseña} = req.body

  let farmaciaActualizada = JSONfarmacia.find(farmacia => {
    if(farmacia.id == id_farmacia){
      farmacia.correo = correo,
      farmacia.nit = nit,
      farmacia.nombre = nombre,
      farmacia.rol = rol,
      farmacia.contraseña = contraseña
      return farmacia;
    }
  })

  if(farmaciaActualizada != undefined){
    fs.writeFileSync('./farmacias.json', JSON.stringify(JSONfarmacia), 'utf-8')
    res.status(201).json(farmaciaActualizada)
  }else{
    res.status(200).json(`La farmacia ${id_farmacia} no existe`)
  }

})

router.delete("/farmacia/:id", (req, res) => {
  let id = req.params.id
  let indexFarmacia = JSONfarmacia.findIndex(farmacia => farmacia.id == id)
  if (indexFarmacia != -1) {
    JSONfarmacia.splice(indexFarmacia, 1)
    fs.writeFileSync('./farmacias.json', JSON.stringify(JSONfarmacia), 'utf-8')
    res.status(200).json({ mensaje: `La farmacia ${id} fue eliminada` })
  } else {
    res.json(`El id ${id} no existe`)
  }
})

module.exports = router