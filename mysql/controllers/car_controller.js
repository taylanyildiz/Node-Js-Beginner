const mysql = require('../configs/mysql_configs.js');


const getCar = (req, res) => {
    let cars = { cars: [] };
    const sql = 'SELECT t1.imei, t2.data_key, t3.data_name FROM iot_devices t1 INNER JOIN iot_data_pool_info t2 ON t1.id = t2.device_id INNER JOIN data_names t3 ON t2.data_name_id = t3.data_id WHERE t1.device_type_id = 3';
    mysql.query(sql, (err, result) => {
        let imeiList = [];
        if (err) {
            console.error(err);
            res.status(200).send({ message: err });
        }
        for (let index = 0; index < result.length; index++) {
            let subIndex = imeiList.indexOf(result[index].imei);
            if (subIndex == -1)
                imeiList.push(result[index].imei);
        }
        for (let index = 0; index < imeiList.length; index++) {
            let firstElement = imeiList[index];
            let car = { imei: firstElement, sensors: [] };
            for (let subIndex = 0; subIndex < result.length; subIndex++) {
                let secondElement = result[subIndex];
                if (firstElement == secondElement.imei) {
                    let sensor = { datakey: secondElement.data_key, dataname: secondElement.data_name };
                    car.sensors.push(sensor);
                }
            }
            cars.cars.push(car);
        }
        res.send();
    });
}

module.exports = { getCar };