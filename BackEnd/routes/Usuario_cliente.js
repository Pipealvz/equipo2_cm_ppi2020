const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql_pool');

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

// {  MÉTODO : "POST" }
 /* router.post('/usuario',(req,res)=>{
    const {
      correo,
      contraseña,
      nombre,
      apellido,
      rol
  } = req.body
    let dataUser = [
    correo,
    contraseña,
    nombre,
    apellido,
    rol
    ];
  let newUser = 'INSERT INTO `usuario_cliente`(`correo`, `contraseña`, `nombre`, `apellido`, `rol`) VALUES (?,?,?,?,?)';
  mysqlConnection.query(newUser,dataUser,(err, rows, fields)=>{
        if (!err) {
          return console.error(err.message)
        } else {
          res.json({mensaje: "Usuario añadido!! :)"})
        }
        console.log(rows)
      })
  })*/

// {  MÉTODO : "POST" }
  router.post('/usuario',(req,res)=>{
   const {correo, contraseña, nombre, apellido, rol} = req.body;
  let newUser = [correo, contraseña, nombre, apellido, rol];
  mysqlConnection.query('INSERT INTO pedido (documento, documento_formula, id_usuario, nombre_farmacia) VALUES (?,?,?,?)',(err, results, fields)=>{
    if(!err){
      return console.error(err.message)
    }else{
      res.json({message: "Pedido añadido!"})
    }
  })
})
  module.exports = router;