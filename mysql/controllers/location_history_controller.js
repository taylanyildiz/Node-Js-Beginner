const sqlConnection = require('../configs/mysql_configs.js');


const getLocationHistory = (req, res) => {
    const tableName = req.body.tableName;
    const first_date = req.body.first_date;
    const last_date = req.body.last_date;

    const sql = 'CALL GetCarLocationHistory(?,?,?);';

    let locationList = [];

    sqlConnection.query(sql, [tableName, first_date, last_date], (err, result) => {
        if (err) {
            console.log('Error : ', err);
            res.status(400).json({ message: err });
        }
        for(let index = 0;index<result[0].length;index++){
            // let value = Object.values(result[0][index]);
            let element = result[0][index];
            locationList.push(element.value);
        }
        console.log('');
    });

    res.end();
}


module.exports = { getLocationHistory };