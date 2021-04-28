/*
    For Of Loops
    -iterate over the values or an iterable object (strings and arrays included)
    -iterable means to be able to parse through the numbers
*/

//Objects are not iterable, therefore it does not work
let student = {
    name: 'Jake from state farm',
    awsome: true,
    degree: 'insuriance sales',
    age: 98   
};

/*for(item of student){
    console.log(item);
}*/

let soupArray = ['potato', 'broccoli', 'chicken noodle', 'chili', 'cereal'];
for(soup of soupArray){
    console.log(soup);
}
