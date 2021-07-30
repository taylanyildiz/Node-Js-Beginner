
const increment = require('./controllers/increment.js');
const calling = require('./controllers/call_name.js');
const who = require('./controllers/person.js');

console.log(increment(12,43));

calling('Taylan');

console.log(who.person.name);
console.log(who.person.lastname);
console.log(who.person.age);

who.person.add();
