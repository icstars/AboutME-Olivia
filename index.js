// // VARIABLES
// // let, var, const

// //let name = "Olivia";

// //name = "Veloz";

// //console.log(name); // Print to the console

// //console.log("Hello world");
// // const name = "pizza";
// // const topping = "pineapple";
// /* adding two strings;
// concatenation */
// // console.log(name, topping);

// // TEMPLATE LITERALS // turns everything to a string
// // console.log(`${name} ${topping}`);

// // console.log("32" + "100" + "string");

// // integer

// // boolean

// // false, undefined, null, 0 will be false statements
// // let num = name;

// // console.log(Boolean(num));

// // let prompt1 = prompt("What is your name?");
// // let whereDidHeGo = prompt("Where did he go?");
// // console.log(`${prompt1} went to the ${whereDidHeGo}`);

// // alert(`${prompt1} went to the ${whereDidHeGo}`);

// let variableName = prompt("What is your name?");
// let variableAge = prompt("What is your Age?");
// let variableHobby = prompt("What is your Hobby?");

// alert(
//   `Hi my name is ${variableName} and my age is ${variableAge} and my favorite hobby is ${variableHobby}`
// );

// CONDITIONALS ////// THIS IS WHERE CONDITIONALS START

// truthy values

// let x = 1;
//FALSY VALUES (BELOW)
// undefined, null, NaN, 0

// conditional operators

// ===; 1 === 1 is true
// ==; loose equals; 1 =='1'
// loose equals; checks if values are the same, regard.

// <, >, !==(NOT EQUALS), <=, >=;
// More than or equal to

// if statement
// condition action
// if(this is true) {then run this}

// if ("collin" === "collin") {console.log("hello world");}

// LOGICAL OPERATOR
// || && ??
// || = or
// && = and // checks to see if all conditions are true
// ?? = NULLISH

let x = 0;
let y = 1;

if (x === 0 && y === 1) {
  console.log("hello world");
}

let questComplete = false;
let questComplete2 = false;
let slimesDefeated = 0;
// OR OPERATOR

if (slimesDefeated === 10) {
  questComplete = true;
}

let i = 0;
let k = 1;

if (i === 1 || k === 1) {
  console.log("hello world");
}

// if this happens or this

// ELSE; if the statement is false

// let v = 10;
// let u = 8;

// if (v === 9) {
//   console.log("hello world");
// } else {
//   console.log("goodbye world");
// }

//if (login === true) {
// redirect to page
//} else {
// alert("user doesn't exist");
//}

// else if // will run if the conditions before it are false and specifies a new condition

// if (login === true) {
// } else if () {
// }

// let userName = prompt("Enter your username");

// if (userName === "olivia123") {
//   alert("logged in!");
// } else if (userName === "lucy321") {
//   alert("logged in!");
// } else {
//   alert("no account found");
// }

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = ["liv", "kamar", "derrick", "jimmy"];

// console.log(arr[randomNumber]);

// //if (arr[randomNumber] === "liv") {
//   console.log("Hello world");
// } else if (arr[randomNumber] === 'kamar') {
// console.log("whats poppin")
// }else {
//   console.log("tech youre wrong");
// }

// let arr = ["shadi", "lucy", "kite"]
// if(arr[0] === "shadi") {
//   console.log("shadi");
// } else if (arr[1] === "lucy"){

// }
// Challenge: Guess the Number
// The program generates a random number between 1 and 10.
// The user is prompted to guess the number.
// If the user's guess matches the generated number, an alert is shown with a success message.
// If the user's guess is incorrect, an alert is shown with a failure message.

let randomNumber = Math.ceil(Math.random() * 10);

console.log(randomNumber);

let userQuestion = prompt("Guess a number 1-10");
if (userQuestion == randomNumber) {
  alert("Congrats Homie");
} else {
  alert("You're wrong homie");
}
