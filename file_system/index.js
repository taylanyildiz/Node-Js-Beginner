/// The Node.js file system module allows you to work with the file system on your computer.
// Common use for the File System module:
// Read files
// Create files
// Update files
// Delete files
// Rename files

/*
    * fs.readFile('<file_name>',(err,data)=>{})
    * fs.open()
    * fs.writeFile()
    * fs.appendFile()
*/

const fs = require('fs');

fs.readFile('demo1.html',function(err,data){
    (err) => console.log(`${err}`);
    console.log(`data : ${data}`);
});

fs.appendFile('createing_file.txt','I am Taylan.. :)',(err)=>{
    if(err) throw err;
    console.log('Saved!!');
});