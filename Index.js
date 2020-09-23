const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Backend PPI_Equipo 2_cm');
});

app.listen(5057, function () {
    console.log("El servidor está en uso.");
});
