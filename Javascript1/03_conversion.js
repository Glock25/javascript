let score = "33"

console.log(typeof score);


// Change the string datatype to number datatype
let valueInNumber = Number(score)


console.log(typeof valueInNumber);// number

// if we use number and sting together

let score1 = "33aaa"

// now this will also change the datatype string to number
let valueInNumber1 = Number(score1)


// but if we check the value of valueInNumber1 this will be "NaN" not a number
console.log(typeof valueInNumber1); // number

// true is 1 false is 0


let isLoggenIn = 1

let booleanIsLoggedIn = Boolean(isLoggenIn)

console.log(booleanIsLoggedIn); // true

// 1=> true;  0=>false
// "" => false
// "anystring" =>  ture

//-------------- Operations -------------------
let value = 4
let negValue = -value

// console.log(negValue);

console.log(1 + "2");
console.log("3" + 1);


let x = 3;


const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"










