const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql');

router.get('/favoritos', (req, res) => {
  try {
    mysqlConnection.query('SELECT * FROM `favoritos`', (error, rows, fields) => {
      if(error){
        res.status(503).json({mensaje : "Error en el servidor.", error : true})
      }
      res.json(rows)
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

module.exports = router;