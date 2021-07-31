/// MYSQL CONNECTION
require('./configs/mysql_configs.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const router = express.Router();
const API_VERSION = '/api/v1';
const PORT = process.env.PORT || 3050;

app.use(bodyParser.json());
app.use(API_VERSION, router);

require('./routers/location_router.js')(router);
require('./routers/car_router.js')(router);


app.listen(PORT, () => console.log('Server is Running : ' + PORT));
