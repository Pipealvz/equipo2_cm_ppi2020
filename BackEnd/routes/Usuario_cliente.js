const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql');

router.get('/usuarios', (req, res) => {
    try {
        mysqlConnection.query('SELEC * FROM `usuario_cliente`', (error, fields, rows)=>{
            if (!error) {
                res.status(502).json({mensaje: "Error en el servidor", error:true})
            }
                res.json(rows)
        })
    } catch (error) {
        res.status(502).json({mensaje: "Error en el servidor", error:true})
    }
})

module.exports = router;