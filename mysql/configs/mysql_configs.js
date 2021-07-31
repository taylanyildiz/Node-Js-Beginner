const mysql = require('mysql');
const config = require('./configs.js');

console.log('Connect SQL');

const mysqlConnection = mysql.createConnection({
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.dbname
});

mysqlConnection.connect((err) => {
    if(err) throw err;
    console.log('Connect Succsess SQL');
});

module.exports = mysqlConnection;