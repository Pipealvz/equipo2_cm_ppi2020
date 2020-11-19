const util = require('util')
var mysql = require('mysql');
var mysqlConnection  = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  multipleStatements: true
})

mysqlConnection.on('relase', (connection)=>{
  console.log('connection %d relase', connection.threadId);
})

mysqlConnection.query = util.promisify(mysqlConnection.query);

module.exports = mysqlConnection;