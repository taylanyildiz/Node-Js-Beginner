const controller = require('../controllers/location_history_controller.js');

module.exports = (app) => {
    const field = '/location';
    app.post(field + '/get-location',controller.getLocationHistory);
}