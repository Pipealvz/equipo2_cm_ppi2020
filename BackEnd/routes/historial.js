const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql_pool');

router.get('/historial',(req,res)=>{
  try{
    mysqlConnection.query('SELECT * FROM historial',(err,row, fields ) => {
      if(err){
        console.log(err)
      }
      res.status(200).json(row)
    })
  }catch(error){
    res.status(502).json({mensaje:"Se ha detectado una amenaza!!"})
  }
})

router.get('/historial/:id',(req,res)=>{
  const {id} = req.params;
  try{
    mysqlConnection.query('SELECT * FROM historial WHERE id_historial = ?',[id],(err, row, fields)=>{
      if(!err){
        console.log(err)
      }
      res.status(202).json(row[0])
    })
  }catch(error){
    res.status(503).json({mensaje:"Se ha detectado una amenaza"})
  }
})

module.exports = router;