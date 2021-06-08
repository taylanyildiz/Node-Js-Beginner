const http = require('http');


const port = 8080;
const host = '127.0.0.1';


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'test/json'});
    res.write(JSON.stringify({name:'Taylan',lastname:'YILDIZ',age:25}));
});

server.listen(port,host,()=>{
    console.log('Server is ready..'+port+'/'+host);
});

