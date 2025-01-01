// Giving a Number as String value
let score = "33";

console.log(typeof score);             // => String
console.log(typeof (score));           // => String

// //changing string to number

let valueInNumber = Number(score);

console.log(typeof valueInNumber);      // => Number 
console.log(valueInNumber);             // => NaN (Not a Number)

//---------------------------------------------------------------------

// Giving a String as Number value
let score1 = "check";

console.log(typeof score1);             // => String
console.log(typeof (score1));           // => String

// //changing string to number

let valueInNumber1 = Number(score1);

console.log(typeof valueInNumber1);      // => Number 
console.log(valueInNumber1);             // => NaN (Not a Number)

//----------------------------------------------------------------------

// Giving a String as Number value
let score2 = "33abc";

console.log(typeof score2);             // => String
console.log(typeof (score2));           // => String

// //changing string to number

let valueInNumber2 = Number(score1);

console.log(typeof valueInNumber2);      // => Number 
console.log(valueInNumber2);             // => NaN (Not a Number)

let isLoggedIn = "Sagar";
let isLoggedIn1 = "";
let isLoggedIn2 = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);

console.log(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(isLoggedIn1);
console.log(typeof isLoggedIn1);
console.log(isLoggedIn2);
console.log(typeof isLoggedIn2);


// 1 => true
// 0 => false
// "sagar" => true
// "" => false


//------------------------------------------------------
let num = 33;

let stringNum = String(num);

console.log(stringNum);
console.log(typeof stringNum);