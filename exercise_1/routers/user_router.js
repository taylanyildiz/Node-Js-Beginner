const controller = require('../controllers/get_user_controller.js');

module.exports = (app) => { 
    const field = '/user';
    app.post(field+'/get-user' , controller.getUserController);
};