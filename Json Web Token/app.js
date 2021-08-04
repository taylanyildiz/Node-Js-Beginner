require('./configs/db.js');

const conf = require('./configs/conf.js');
const express = require('express');
const bodyParser = require('body-parser');
const verify = require('./middleware/verify-token.js');
const verifyToken = require('./middleware/verify-token.js');

const app = express();
const router = express.Router();

const API_VERSION = '/api/v1';

app.set('api_secret_key', conf.api_secret_key);

app.use(bodyParser.json());

// app.use('/',verifyToken);
app.use(API_VERSION, router);


const PORT = process.env.PORT || 3050;

require('./routers/add_user.js')(router);
require('./routers/get_users.js')(router);
require('./routers/get_user.js')(router);
app.listen(PORT, () => console.log('Server Running PORT : ' + PORT));