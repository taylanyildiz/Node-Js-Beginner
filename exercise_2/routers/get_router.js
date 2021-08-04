

const event = require('events');
const eventEmmit = new event.EventEmitter();

eventEmmit.once('get', (obj) => {
    console.log('Get Router Runned');
});

const getRouter = function (app) {
    const field = '/get';
    app.get(field + '/example', (req, res) => {
        eventEmmit.emit('get');
        res.status(200).json({ status: 'Work' });
    });
}



eventEmmit.once('post', (body,res) => {
    const name = body.name;
    res.json({ name: name });
});

const getPost = function (app) {
    const field = '/get';
    app.post(field + '/example', (req, res) => {
        eventEmmit.emit('post', req.body,res);
    });
}

module.exports = { getRouter, getPost };