const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const router = express.Router();
const API_VERSION = '/api/v1';
const PORT = process.env.PORT || 3050;

app.use(bodyParser.json());
app.use(API_VERSION,router);

require('./routers/user_router.js')(router);


app.listen(PORT,()=>{
    console.log('Server is Running '+PORT);
});

