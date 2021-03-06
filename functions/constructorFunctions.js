// Option 1

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false,
}

let person3 ={
    name: 'Tyler',
    age: 38,
    canVote: true,
}
//  1   |   2    |         3       |
function Person(name, age, canVote){
//   4  |  5  |   6
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
console.log(typeof Person);

//             7     8
let person4 = new Person('James', 80, true);
console.log(person4);

/*
    1 -The function keyword
    2 - The function name. For constructor functions, the name should be capitalized.
    3 - The parameters . These will be the VALUES pf the object  once this function is in use.
    4 - The 'this' keyword. 'this' gives us the ability to refer back to whatever called or activated it. In this case, 'this' refers to 'Person". (this step can be named whatever, but stick to the parameters to reduce confusion .)
    5 - This will be  key of the new object we will create. This is NOT refering to the parameter.
    6 - This is refering to the parameter that we pass our constructor function
    7 & 8 - The 'new' keyword is calling our Person funciton, creating a new person with the values we pass in as arguments
 */