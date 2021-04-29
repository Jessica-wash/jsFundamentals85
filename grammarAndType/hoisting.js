/*
    - First Pass: Stores our variables declarations (essentially says, "hey, i know a variable of xa is defined, so let me store that in my memory so i know it's there"), but does not assign them in their values.
        - Anything that needs to be hoisted, is hoisted.

    -Second Pass: Assigns the values to our variables and executes any hoisted source code.
*/

//console.log(myName);
let myName = 'Eric'; //ran after initialization will not hoist
console.log(myName);
//console.log(randomVariable); this causes an error bc it is not defined

b()

function b() {
    console.log('I have been hoisted');
} //the first pass sees the value but does nothing with it, first pass then sees the FUNCTION and remembers the value and then will proceed to second pass