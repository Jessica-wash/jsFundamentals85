/*
    For In Loops
    -greate for iterating over values in an object
    -properties in objects are whates called enumerable
    enumerable just means 'countable'
*/

let student = {
    name: 'Jake from state farm',
    awsome: true,
    degree: 'insuriance sales',
    age: 98   
};

for(item in student){
    console.log(item);
    console.log(student[item]);
};
