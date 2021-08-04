const conf = require('./conf.js');
const db = require('mysql');


const {NAME,PASSWORD,DBNAME,HOST,PORT} = conf.mysql;

const dbConnection = db.createConnection({
    user:NAME,
    password:PASSWORD,
    host:HOST,
    port: PORT,
    database: DBNAME,
});


dbConnection.connect((err)=>{
    if(err) console.error(err);
    console.log('DB CONNECTED');
});

module.exports = dbConnection;