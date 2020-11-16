const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql');

router.get('/usuario', (req, res) => {
    try {
      mysqlConnection.query('SELECT * FROM `usuario_cliente`', (error, rows, fields) => {
        if(error){
          res.status(503).json({mensaje : "Error en el servidor.", error : true})
        }
        res.json(rows)
      })
    }catch(error){
      res.status(503).json({mensaje : "Error en el servidor.", error : true})
    }
  })

  router.get('/usuario/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM `usuario_cliente` WHERE id_usuario = ?', [id],(err, row, fields)=>{
      if(!err){
        res.json(row[0])
      }else{
        console.log(err)
      }
    })
  })

  router.post('/usuario',(req,res)=>{
    const {
      correo,
      contraseña,
      nombre,
      apellido,
      rol
  } = req.body
  var NewUser = [
    correo,
    contraseña,
    nombre,
    apellido,
    rol
    ];
      mysqlConnection.query('INSERT INTO usuario_cliente (correo, contraseña, nombre, apellido, rol) VALUES (?, ?, ?, ?, Usuario)',(err, rows, fields)=>{
        if (!err) {
          return console.err(err.message)
        } else {
          res.json({mensaje: "Usuario añadido!! :)"})
          console.log(rows)
        }
      })
  })
  module.exports = router;