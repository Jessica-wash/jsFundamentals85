/* ************
Falsy Values
************** */

/*
-6 different values
    -false
    -0
    -empty strings (" ", ' ', ` `)
    -null
    -undefined
    -naN (not a number)
*/

let isOn = true;

if (isOn == true) {
    console.log('The light is on.');
};

if (isOn) {
    console.log('The light is on, yay!');
}

if(true) {
    console.log('ON!');
}

isOn = false;

if(isOn == false) {
    console.log('The light is off!');
}

let weather = 65;

if(weather > 70) {
    console.log('Wear a jacket.');
}