// this is where we are testing some string components

console.log("This is a test");
  

let danTest = "Hello, World!";
let index = danTest.indexOf("W");

console.log(index);

let danString2 = "Hello, World!";
let splitArray = danString2.split(", ");

console.log(splitArray);

let danString3 = "Oh what a wonderful world we are living in!";
let upperCaseString = danString3.toUpperCase();
let lowerCaseString = danString3.toLowerCase();

console.log(upperCaseString); 
console.log(lowerCaseString);

let firstName = "Peter";
let lastName = "Blogs";
let fullName = firstName.concat(" ", lastName);

console.log(fullName);

let danString4 = "This is the house that Jack built!";
let startsWith = danString4.startsWith("This");
let endsWith = danString4.endsWith("BOOMARANG!");

console.log(startsWith);
console.log(endsWith);

