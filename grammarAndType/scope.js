let x = 12;
function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);



let y = 12;
function scopeTwo() {
    y = 33, // no 'let' reassings the variable
    console.log(y);
}

console.log(y);
scopeTwo();  // calling out the function means relaizing the variable was reassigned
console.log(y);