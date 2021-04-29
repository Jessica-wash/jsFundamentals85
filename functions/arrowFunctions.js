/*
        1       2
    let hi = () => {
        console.log('Hi');
    }

    1: We need to set the fat arrow function to a variable.
    2: We use thge 'fat arrow' to signify it is a funtion.

    - arrow functions (fat arrow functions) introduced in 5S6.
        - a more consise way to write function expressions *not declarations
        - arrow functions do NOT het hoisted
    - 2 types of arrow funcitons:
        - Consise Body
        -Block Body

*/

//! Consise Body
let hi = () => console.log('hi');
// consise body arrow functions retuen by default.
//hi(); *invoking comes after*

//! Block Body
let hi = () =>{
    console.log('hi');
}
// block body arrow functions muct have a return in the body of the function (between the curly brackets{ })

let apples = x => console.log(`There are ${x} apples.`);
apples(10);

let bananas = (x,y) => {
    console.log(`There are ${x} bananas`);
}
bananas(10);

// if no or multi parameters are needed - use ()
// do not need () if we are only passing 1 parameter