/* String properties
-properties associates with a datatype
-strings have only one property and that is the lenth property

*/

let myName = 'Jessica';
console.log(myName.length);

/* String Methods
-methods are tools that can hekp us manipulate our data
.method( ) .property
-methods are functions assosiated with datatypes
*/

console.log(myName.toUpperCase());
// .toUpperCase() will capitalize all letters

let home = 'My home is Indiana';
console.log(home.includes('Indiana'));
// .includes() will check if a certain string is uncluded in another string

let sent = 'This scentence will be split into individual pieces';
console.log(sent.split(' '));