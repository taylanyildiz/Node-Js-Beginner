const fs = require('fs');
const file = 'video.mp4';

let index = 0;
let process = 0;

const readStream = fs.createReadStream(file);
/// It's already exist
const writeStream = fs.createWriteStream('copy.mp4');

fs.stat(file, (err, data) => {

    const totalSize = data.size;

    readStream.on('data', (chunk) => {
        // index++;
        // console.log('get data' + index);
        /// console.log(chunk.length);
        process += chunk.length;
        console.log(' % ' + Math.round((100 * process) / totalSize));
    });

    readStream.pipe(writeStream);
        writeStream.on('finish',()=>{
            console.log('Create file');
    });

    writeStream.on('error',()=>{
        console.log('Erro create write');
    })

    readStream.on('error',()=>{
        console.log('error');
    })

    readStream.on('end', () => {
        console.log('Finished');
    });

});

