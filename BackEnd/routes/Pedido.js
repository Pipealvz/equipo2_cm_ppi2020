const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql');

//mysqlConnection.connect();
// { MÉTODO : "GET" }
router.get('/pedido', (req, res) => {
  try {
    mysqlConnection.query('SELECT * FROM `pedido`', (error, rows, fields) => {
      if(error){
        res.status(503).json({mensaje : "Error en el servidor.", error : true})
      }
      res.json(rows)
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

router.get('/pedido/:id', (req, res) => {
     const {id} = req.params;
  mysqlConnection.query('SELECT * FROM farmacia WHERE id_pedido =? ',[id],(err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

router.post('/pedido',(req,res)=>{
   const {documento, documento_formula, id_usuario, nombre_farmacia} = req.body;
  let newpedido = [documento, documento_formula, id_usuario, nombre_farmacia];
  mysqlConnection.query('INSERT INTO pedido (documento, documento_formula, id_usuario, nombre_farmacia) VALUES (?,?,?,?)',(err, results, fields)=>{
    if(!err){
      return console.error(err.message)
    }else{
      res.json({message: "Pedido añadido!"})
    }
  })
})

module.exports = router;