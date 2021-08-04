
const controller = require('../controllers/user_controller.js');

const addUser = (app) => {
    const field = '/user';
    app.post(field + '/add-user',  controller.addUser);
}

module.exports = addUser;