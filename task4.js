// task 1
function multiply(a, b) {
  return a * b;
}

function calculate(num1, num2, operation) {
  var result = operation(num1, num2);
  displayResult(result);
}

function displayResult(result) {
  console.log("The result is:", result);
}

calculate(5, 4, multiply); 

//task 2

//setTimeout 

function greetUser() {
  setTimeout(() => {
    console.log("Hello, User!");
  }, 3000); 
}

greetUser();

//setInterval Countdown from 10 to 1 

function countdown() {
  let count = 10;

  const intervalId = setInterval(() => {
    console.log(count);
    count--;

    if (count === 0) {
      console.log("Time's up!");
      clearInterval(intervalId); 
    }
  }, 1000); 

countdown();

//Clear setInterval After 5 Seconds 

function countdownWithLimit() {
  let count = 10;

  const intervalId = setInterval(() => {
    console.log(count);
    count--;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped early after 5 seconds.");
  }, 5000);
}

countdownWithLimit();

//Clear setTimeout Before It Runs

function cancelTimeoutMessage() {
  const timeoutId = setTimeout(() => {
    console.log("This will be cleared!");
  }, 5000);

  clearTimeout(timeoutId);
  console.log("Timeout cleared before message appears.");
}

cancelTimeoutMessage();}
