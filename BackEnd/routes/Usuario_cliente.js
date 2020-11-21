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
router.post('/usuario',(req,res)=>{
  const {correo, contraseña, nombre, apellido, rol} = req.body;
  let dataUser = [correo, contraseña, nombre, apellido, rol];
mysqlConnection.query('INSERT INTO usuario_cliente(correo, contraseña, nombre, apellido) VALUES (?,?,?,?)',dataUser,(err, results, fields)=>{
  if(err){
    return console.error(err.message)
  }
  console.log(results);
  res.json({ mensaje:`Registro exitoso!!`})
})
})

router.post('/usuario/login',(req,res)=>{
  const {correo, contraseña} = req.body;
  let dataLogin = [correo, contraseña]
  mysqlConnection.query('SELECT correo, contraseña FROM usuario_cliente',dataLogin,(err, row, fields)=>{
    if(!err){
      console.log(row)
      res.json(row)
    }
    res.status(401).json({mensaje:"Error al ingresar"})
  })
})

// {  MÉTODO : "POST" }
  /*router.post('/usuario',(req,res)=>{
   const {correo, contraseña, nombre, apellido, rol} = req.body;
  let newUser = [correo, contraseña, nombre, apellido, rol];
  mysqlConnection.query('INSERT INTO usuario_cliente(correo, contraseña, nombre, apellido, rol) VALUES (?,?,?,?,Usuario)',(err, results, fields)=>{
    if(!err){
      return console.error(err.message)
    }else{
      console.log(results)
      res.json({message: "Registro Exitoso!!"})
    }
  })
})*/


// {  MÉTODO:"DELETE" }

router.delete('/usuario/:id',(req,res)=>{
  const {id} = req.params;
    mysqlConnection.query('DELETE FROM pedido WHERE id_usuario = ?',[id],(err, row, fields)=>{
      if(!err){
        res.json({status: "Usuario eliminado!!"})
      }
      res.status(502).json({mensaje:"Error en la consulta!!"})
    })
})

module.exports = router;