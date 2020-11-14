const mysql = require('mysql')
const mysqlConnection = mysql.createConnection({
  host:"btmpb7wisqt3ydcps71x-mysql.services.clever-cloud.com",
  user:"ujyyb1uctp6mprlo",
  password:"LVXeoiYtEC7FQ4W16zhd",
  database:"btmpb7wisqt3ydcps71x"
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;