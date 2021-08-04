const controller = require('../controllers/user_controller.js');
// const verify = require('../middleware/verify-token.js');

module.exports = (app) => {
    const field = '/user';
    app.post(field+'/get-single-user',controller.getUser);
}