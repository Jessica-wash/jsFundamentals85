/*
    Loops
    -offer us a quick ans eay way to do something repeatedly, or loop orver something

    -A loop has 3 part
        -Initial expression
        -condition
        -increment expression
*/

//set i to 0
//while i is less than 10
//i++ (add 1)

for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

for(let i = 10; i >= 0; i -= 1){
    console.log(i);
}

for (let i = 0; i >= -24; i -= 2){
    console.log(i);
}

let myName="Jessica"

for  (let i = 0; i < myName.length; i ++){
    console.log(myName[i]);
}

//Make a loop where you add up all numbers 1-50
//sum should be 1275

let sum = 0

for (let i = 0; i <= 50; i ++ ){
    sum += i;
    // console.log(sum); ** Having con.log inside shows all numbers being added together**
}
console.log(sum);