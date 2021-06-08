
const date = require('./date_current');

const multiExport = require('./multi_module');

console.log(date.dateTime());

console.log(multiExport.callPerson('Taylan'));

console.log(multiExport.callAnimal('Cat'));

console.log(multiExport.createNumber());