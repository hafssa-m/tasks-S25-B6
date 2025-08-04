//  Task 1: Using console.log() and Variable

//  1. Create variables of different data types:
//    - String.
//    - Number.
//    - Boolean.
//    - Null and Undefined.

let name = "Hafssa";
let age = 21 ;
let x = true ;
let y = null ;
let z ; // undifined

//  2. Use console.log() to print the values of these variables in the Console.

console.log(name);
console.log(age);
console.log(x);
console.log(y);
console.log(z);

//  3. Use typeof to check the type of each variable and display it using console.log.

console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z )

//  4. Create two string variables (firstName and lastName) and concatenate them:

let firstName = "Hafssa";
let lastName = "Mahrous";

// Using the old way (via +)
let fullNameOld = firstName + " " + lastName;
console.log("Full name (old way):", fullNameOld);

// Using the modern approach (via Template Literals)
let fullNameModern = `${firstName} ${lastName}`;
console.log("Full name (template literal):", fullNameModern);

//  Task 2: Working with Data and Basic Validation
//  Task:
//  1. Create two variables containing text:
//    - Username.
//    - Password.
//  2. Perform a basic validation using if:
//    - If the username is empty, display an alert saying: "Username is required".
//    - If the password is less than 8 characters, display an alert saying: "Password must be at least 8
//  characters".
//  3. Use console.log() to display the username and password after they pass the validation


let username = "Arla";
let password = "mypassword";

if (username === "") {
  alert("Username is required");
} else if (password.length < 8) {
  alert("Password must be at least 8 characters");
} else {
  console.log("Username:", username);
  console.log("Password:", password);
}