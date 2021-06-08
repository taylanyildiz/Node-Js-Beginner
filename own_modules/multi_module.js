var callName = function(name){
    return name;
}



module.exports.callPerson = callName;

module.exports.callAnimal = function(animal){
    return animal;
}

module.exports.createNumber = ()=>{
    return Math.round(Math.random()*5);
}