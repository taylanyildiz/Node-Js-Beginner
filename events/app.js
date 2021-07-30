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



/// IO 


const fs = require('fs');

var readFile;

// const listenBook = (obj) => {
//     obj['books'].forEach(book => {
//         console.log(book['name']);
//     });
// }

// fs.readFile('test.json', (err, data) => {
//     if (err) throw err;
//     const obj = JSON.parse(data);
//     console.log(obj);
//     listenBook(obj);
// });

// console.log('finished');

/// Asenkron..

// const readBook = async function (obj) {
//     obj['books'].forEach(book => {
//         const name = Object.values(book);
//         name.forEach(n => {
//             console.log(n);
//          });
//     });
// }
// const data =  fs.readFileSync('test.json');
// readBook(JSON.parse(data));
// console.log('Finished');


// let users = { users: [] };


// const names = ['Taylan', 'Reber', 'YILDIZ', 'SINCAR'];

// names.forEach(name => {
//     singleUser = { name: name };
//     users.users.push(singleUser);
// });


// console.log(users);

// fs.appendFile('demo.txt', 'users', (err) => {
//     if (err) console.log(err.toString());
//     console.log('Successfull append');
// });


// fs.writeFile('demo.js', 'users', 'utf-8', (err) => {
//     if(err)
//         throw err;
//     console.log('Success');
//  });


fs.unlink('test.json', err => {
    if(err)
        throw err;
    console.log('Success');
 });
 