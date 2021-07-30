const fs = require('fs');
const http = require('http');

const PORT = process.env.PORT || 3050;
const server = http.createServer();


// var movies = { success: null, movies: [] };

// var names = ['Interstaller', 'Anatolia', 'MUSTAFA KEMAL ATATURK'];
// const success = 1;

// movies.success = success;

// names.forEach(name => {
//     const index = movies.movies.indexOf(name);
//     if (index == -1) {
//         movies.movies.push({name:name});
//     }
// });

// let jsonFormat = JSON.stringify(movies);

// console.log(jsonFormat);



// fs.appendFile('test.json',jsonFormat.toString(), (err) => {
//     if (err) throw err;
//     console.log('Append or Create Success');
// });


// const file = 'test.json';
// const readStream = fs.createReadStream(file);


// let len = 0;


// fs.stat(file, (err, data) => {
//     console.log(data.size);
//     readStream.on('data', (chunk) => {
//         len += chunk.length;
//         console.log(len);
//     });
// });

// // fs.stat(file,(err,data)=>{
// //     console.log(data.size);
// //     readStream.on('data',(chunk)=>{
// //         len += chunk.length;
// //         console.log(len);
// //         console.log(chunk.toString());

// //     });
// // });


// const readJson = fs.readFileSync(file);

// // console.log(JSON.parse(readJson));




// readStream.on('end', () => {
//     console.log('Finished');
//  });



// readStream.on('data', (chunk) => {
//     len += chunk.length;
//     console.log(len);
//     console.log(chunk.toString());

//     server.on('request', (req, res) => {
//         res.writeHead(200, { 'Content-Type': 'application/json; charset = utf-8' });
//         res.end(chunk.toString());
//     }).listen(PORT);
// });



/// Emitter & event


// const events = require('events');
// const eventEmitter = new events.EventEmitter();


// eventEmitter.on('hey', (object) => {
//     console.log('Sey Hello' + object.name + object.lastname);
// });

// eventEmitter.emit('hey', { name: 'Taylan', lastname: 'YILDIZ' });


// eventEmitter.once('ok', () => {
//     console.log('Just Run Once');
// });

// eventEmitter.emit('ok');
// eventEmitter.emit('ok');
// eventEmitter.emit('ok');

const events = require('events');
const eventEmitter = new events.EventEmitter();

// eventEmitter.on('connection', (port) => { 
//     console.log('Connection : '+port);
// });


// eventEmitter.emit('connection',1883);

const _server = {
    host: 'http://255.234.23.1',
    port: 1883
};

eventEmitter.once('connected', (url) => {
    console.log(`${url.host} : ${url.port}`);
});


eventEmitter.emit('connected',_server);