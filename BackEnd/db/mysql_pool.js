const util = require('util')
var mysql = require('mysql');
var mysqlConnection  = mysql.createPool({
  connectionLimit: 10,
// ACÁ NO BORRAS LA BD ZORRA JSJSAJSJASJAS
})

mysqlConnection.on('relase', (connection)=>{
  console.log('connection %d relase', connection.threadId);
})

mysqlConnection.query = util.promisify(mysqlConnection.query);

module.exports = mysqlConnection;