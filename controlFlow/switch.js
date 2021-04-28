/*
    Switch statements execute a block of code depening on different cases.

    -often used together with a "break" or a "default" keyword (both optional)
        -break: breaks out of the switch block.(stops the execution of code)
        -default: specifies some code to run if there is no case match.
*/

let officeCharacter = 'Dwight';

switch(officeCharacter) {
    case 'Michael':
        console.log("My mind is going a mile an hour");
        break;
    case 'Dwight':
        console.log('Prefectenshlag!');
        break;
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica');
        break;
    default:
        console.log(officeCharacter);
}