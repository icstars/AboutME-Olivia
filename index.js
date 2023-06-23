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

// let x = 0;
// let y = 1;

// if (x === 0 && y === 1) {
//   console.log("hello world");
// }

// let questComplete = false;
// let questComplete2 = false;
// let slimesDefeated = 0;
// // OR OPERATOR

// if (slimesDefeated === 10) {
//   questComplete = true;
// }

// let i = 0;
// let k = 1;

// if (i === 1 || k === 1) {
//   console.log("hello world");
// }

// // if this happens or this

// // ELSE; if the statement is false

// // let v = 10;
// // let u = 8;

// // if (v === 9) {
// //   console.log("hello world");
// // } else {
// //   console.log("goodbye world");
// // }

// //if (login === true) {
// // redirect to page
// //} else {
// // alert("user doesn't exist");
// //}

// // else if // will run if the conditions before it are false and specifies a new condition

// // if (login === true) {
// // } else if () {
// // }

// // let userName = prompt("Enter your username");

// // if (userName === "olivia123") {
// //   alert("logged in!");
// // } else if (userName === "lucy321") {
// //   alert("logged in!");
// // } else {
// //   alert("no account found");
// // }

// // let randomNumber = Math.floor(Math.random() * 4);
// // console.log(randomNumber);

// // let arr = ["liv", "kamar", "derrick", "jimmy"];

// // console.log(arr[randomNumber]);

// // //if (arr[randomNumber] === "liv") {
// //   console.log("Hello world");
// // } else if (arr[randomNumber] === 'kamar') {
// // console.log("whats poppin")
// // }else {
// //   console.log("tech youre wrong");
// // }

// // let arr = ["shadi", "lucy", "kite"]
// // if(arr[0] === "shadi") {
// //   console.log("shadi");
// // } else if (arr[1] === "lucy"){

// // }
// // Challenge: Guess the Number
// // The program generates a random number between 1 and 10.
// // The user is prompted to guess the number.
// // If the user's guess matches the generated number, an alert is shown with a success message.
// // If the user's guess is incorrect, an alert is shown with a failure message.

// let randomNumber = Math.ceil(Math.random() * 10);

// console.log(randomNumber);

// let userQuestion = prompt("Guess a number 1-10");
// if (userQuestion == randomNumber) {
//   alert("Congrats Homie");
// } else {
//   alert("You're wrong homie");
// }
// ///variables and data types
// //let myName = "Colin"
// ///console.log(myName)
// //console.log(typeof myName)

// /// conditionals

// /// looping thru an array

// //for(let i = 0; team.lengths; i++){
// //console.log(i);
// //}

// ///variables and data types

// let myName = "Lucycan";
// console.log(myName);
// console.log(typeof myName);
// /// conditionals
// if (myName === "Collin") {
//   console.log("Hello ${myName}");
// } else {
//   console.log(false);
// }
// // for
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// /// arrays and methods
// //let team = ["Lucycan", "Collin", "Mark", "Cortez"];
// console.log(team);
// console.log(team.length);
// /// push
// console.log(team.push("Derrick", "John"));
// console.log(team);
// /// pop
// console.log(team.pop());
// console.log(team);
// ///join
// console.log(team.join(""));
// ///slice returns a new array
// let team1 = "john,mike,kiersten,lucy";
// console.log(team1);
// let team1Slice = team1.slice();
// console.log(team1Slice);
// console.log(team.slice(1, 3));
// ///split
// let team2 = "john,mike,kiersten,lucy";
// console.log(team1);
// let teamSplit = team1.split(",");
// console.log(teamSplit);
// /// looping thru an array
// console.log(team);

// let team = "Lucycan,Collin,Melissa,Cortez,Deisy";
// let roles = [
//   "Tech Manager",
//   "TechFello",
//   "Placement Manager",
//   "Program Manager",
//   "Intern",
// ];

// let names = ["Lucycan", "Collin", "Melissa", "Cortez", "Deisy"];
// /// hi my name is Lucycan and I am the Tech Manager

// for (let i = 0; i < team.length; i++) {
//   console.log(`hello my name is ${names[i]} i am the ${roles[i]} `);
// }

// let roles3 =[];
// let team3 = [];

// let team2 = prompt("Enter your team names");
// console.log(team2);
// let roles2 = prompt("Enter your team roles");
// console.log(roles2);

// for (let i = 0; i < team.length; i++) {
// console.log(i);
// console.log(`Hello `)

// }

let rfpTeam = prompt("Enter your team's names:");
let rfpRoles = prompt("Enter your team's roles:");
console.log(rfpTeam);
let rfpTeamSplit = rfpTeam.split(",");
let rfpRolesSplit = rfpRoles.split(",");
console.log(rfpTeamSplit);
console.log(rfpRolesSplit);
for (i = 0; i < rfpTeamSplit.length; i++) {
  console.log(
    `Hello my name is ${rfpTeamSplit[i]} and I am the ${rfpRolesSplit[i]}`
  );
}
