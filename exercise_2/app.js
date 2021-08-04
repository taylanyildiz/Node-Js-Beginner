const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const PORT = process.env.PORT || 3050;
const API_VERSION = '/api/v1';

app.use(bodyParser.json());
app.use(API_VERSION,router);



require('./routers/get_router.js').getRouter(router);
require('./routers/get_router.js').getPost(router);

app.listen(PORT,()=>console.log('Server Running '+PORT));
