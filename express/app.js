/*
    * GET
    * POST
    * PUT
    * DELETE
    * ALL
*/


const express = require('express');
const app = express();

const router = express.Router();
const bodyParser = require('body-parser');

const API_VERSION = '/api/v1';

app.use(bodyParser.json());
app.use(API_VERSION, router);
const PORT = process.env.PORT || 3050;

// app.get('/', (req, res) => {
//     res.send(JSON.stringify({ name: 'Taylan' }));
// }).post('/user/get-user', (req, res) => {
//    console.log(req.body);
//    res.end();
// }).all('/all', (req, res) => {

// }).put('/',(req,res)=>{

// }).listen(PORT, () => {
//     console.log('Server Running');
// });


// let user = {};


// router.post('/user/get-user', (req, res) => {
//     const body = req.body;
//     const keys = Object.keys(body);
//     const values = Object.values(body);
//     keys.forEach(key=>{
//         console.log(key+' : '+values[keys.indexOf(key)]);
//     });
//     res.send(req.body);
// });

// app.listen(PORT, () => {
//     console.log('Server Running : ' + PORT);
// });


/// MidleWare

router.use((req, res, next) => {
    let name = req.body.name;
    let isLogin = name === 'Taylan';
    if (isLogin)
        next();
    else
        res.status(200).send('Login Not Found');
});


router.post('/login', (req, res,next) => {
    res.send(req.body.name);
});

app.listen(PORT, () => console.log('Server is Running'));