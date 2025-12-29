// ================================================
// DAY 2 – Execution Context, Scope & Closures
// ================================================

// ------------------------------------------------
// 1. Execution Context (Basic Understanding)
// ------------------------------------------------
// JavaScript code runs in Execution Contexts.
// First created: Global Execution Context
// Each function call creates a new Function Execution Context

console.log("Global Execution Context Started");

// ------------------------------------------------
// 2. Hoisting (Predict the Output)
// ------------------------------------------------

// Hoisting with var
console.log(x); // Output: undefined (hoisted, but not initialized)
var x = 10;

// Hoisting with let
// console.log(y); // ❌ ReferenceError (Temporal Dead Zone)
let y = 20;

// Hoisting with function declaration
sayHi(); // Works due to hoisting
function sayHi() {
  console.log("Hi from function declaration");
}

// Hoisting with arrow function
// greet(); // ❌ TypeError: greet is not a function
const greet = () => {
  console.log("Hi from arrow function");
};
greet();

// ------------------------------------------------
// 3. Scope: Global vs Block Scope
// ------------------------------------------------

let globalValue = "I am global";

if (true) {
  let blockValue = "I am block scoped";
  console.log(blockValue); // Accessible here
}

console.log(globalValue);
// console.log(blockValue); // ❌ Error: blockValue not defined

// ------------------------------------------------
// 4. Closures
// ------------------------------------------------
// Closure: A function that remembers variables
// from its outer scope even after execution

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Counter:", count);
  };
}

const counter = createCounter();

counter(); // Counter: 1
counter(); // Counter: 2
counter(); // Counter: 3

// ------------------------------------------------
// Why Closures Matter in React
// ------------------------------------------------
// Closures help preserve state values
// Used in hooks, event handlers, and callbacks
