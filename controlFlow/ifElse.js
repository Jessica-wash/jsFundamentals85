let weather = 75;

if (weather < 70) {
    console.log('Wear a jacket.');
} else {
    console.log('No jacket necessary!');
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
Silver:
    If It is your name, console log 'Hello, my name is <name>'
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName = 'Jessica';

if(myName == 'Jessica'){
    console.log('Hello, my name is ' + myName);
} else {
    console.log('Hello, is your name ' + myName + '?' );
}

/*
Else if
*/

let newName = "Waldo";

if(newName == "Waldo"){
    console.log('Hello ' + newName + ", welcome back.");
} else if(newName === "James"){
     console.log("Hello " + newName);
} else {
    console.log("I don't know " + newName + ".");
}

