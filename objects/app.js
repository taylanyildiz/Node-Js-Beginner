var persons = { person: [] };
var person = {};
for (var index = 0; index < 10; index++) {
    person = { name: `${index}`, age: `${index + 10}` };
    persons.person.push(person);
}

// const keys = Object.keys(persons);
// const values = Object.values(persons);

// console.log(keys);

// keys.forEach((key) => {
//     console.log(key);
// });

// persons['person'].forEach((person) => {
//     console.log(Object.keys(person)[0]);
//  });

const express = require('express');
const app = express();
const router = express.Router();
const API_VERSION = '/api/v1';
const PORT = process.env.PORT || 3050;
app.use(API_VERSION, router);


const createServer = function (app) {
    const field = '/test';
    app.get(field, (req, res) => {
        res.json(persons);
    });
}

createServer(router);

app.listen(PORT, () => console.log('Server Running ' + PORT));
