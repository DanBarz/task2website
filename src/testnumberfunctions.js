// testing JS number functions Task 1.2

//toFixed example
let num1 = 555.456789;
let exampleNum = num1.toFixed(1);

console.log(exampleNum); 

//random example
let random = Math.random();
console.log(random);
let randomShortened = random.toFixed(2);
console.log(randomShortened);

//floor and ceil example
let num2 = 44.9;

let floorNum = Math.floor(num2);
let ceilNum = Math.ceil(num2);

console.log(floorNum); 
console.log(ceilNum); 

//Int and Float example
let strInt = "33";
let strFloat = "33.13";

let numInt = parseInt(strInt);
let numFloat = parseFloat(strFloat);

console.log(numInt); 
console.log(numFloat); 

//round example
let number = 30.1;
let rounded = Math.round(number);

console.log(rounded);