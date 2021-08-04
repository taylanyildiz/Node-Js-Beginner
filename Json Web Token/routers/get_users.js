const controller = require('../controllers/user_controller.js');


module.exports = (app) =>{
    const field = '/user';
    app.get(field+'/get-users',controller.getUsers);
}