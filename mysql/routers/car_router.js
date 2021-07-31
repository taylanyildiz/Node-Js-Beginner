const controller = require('../controllers/car_controller.js');

module.exports = (app)=>{
    const field = '/cars';
    app.get(field +'/get-cars' , controller.getCar);
}