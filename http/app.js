const http = require('http');

const PORT = process.env.PORT || 3050;

// const server = http.createServer((request, response) => {
//     response.writeHead(200,{'Content-Type':'text/html; charset = utf-8'})
//     response.write('<b>Hello Guys</b><p>Whats Up</p>');
//     response.end();
// });

// server.listen(PORT, () => console.log('Running Server'));


// var books = { books: [] };

// const names = ['SAVAS VE BARIS', 'ICIMDEKI SEYTAN', 'BEYAZ DIS'];

// names.forEach((name) => {
//     books.books.push({ name: name });
// });

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json; charset = utf-8' });
//     res.end(JSON.stringify(books));
// });

// server.listen(PORT, () => console.log('Server Running'));


// const fs = require('fs');

// const server = http.createServer((req, res) => { 
//     res.writeHead(200,{'Content-Type':'application/json; charset = utf-8'});
//     const file = fs.readFileSync('test.json');
//     res.end(file);
// }).listen(PORT,()=>console.log('Running server'));


/*
    * GET => http://localhost/register?username=${username}&password=${password} ???
    * POST => http://localhost/regisger
    * PUT => UPDATE
    * DELETE => DELETE
*/

const server = http.createServer((req, res) => { 
    res.writeHead(200,{'Content-Type':'text/html; charset = utf-8',});
    if(req.method === 'GET'){
        if(req.url === '/')
            res.write('Hello');
        else if(req.url === '/connect')
            res.write('Connect Page');
        else
            res.write('Not Found');
    }
    if(req.method === 'POST'){
        console.log('hey');
    }
    res.end();
}).listen(PORT,()=>console.log(`Running Server ${PORT}`));