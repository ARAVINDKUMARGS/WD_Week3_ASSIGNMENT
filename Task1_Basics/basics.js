// ============================================================
// Task 1 - JavaScript Basics
// Student : Aravind Kumar GS
// File    : basics.js
// Run     : node basics.js
//           (or open index.html in a browser and check the Console tab)
// ============================================================

// ---------- 1. Comments ----------
// This is a single-line comment. JavaScript ignores it.

/*
  This is a multi-line comment.
  It can span as many lines as you need.
  Use it for longer explanations.
*/

let commentDemo = 10; // A comment can also sit at the end of a line.
console.log("Comment demo value:", commentDemo);

// ---------- 2. console.log() ----------
// console.log() prints values to the console. It is the main tool for checking your code.
console.log("=== Task 1: JavaScript Basics ===");
console.log("Hello, InternNova!");
console.log(100);       // numbers can be printed
console.log(true);      // so can booleans
console.log("Name:", "Aravind Kumar GS", "| Week:", 3); // several values separated by commas

// ---------- 3. Syntax rules ----------
// - A statement is one instruction. It normally ends with a semicolon (;).
// - Extra spaces and blank lines are ignored; we use them to make code easy to read.
// - JavaScript is case-sensitive: myName and myname are two different variables.
let myName = "Aravind";
let myname = "Kumar";
console.log("myName =", myName);
console.log("myname =", myname);
console.log("JavaScript is case-sensitive, so these are two different variables.");

// ---------- 4. Basic statements ----------
// Declaration statement: creates a variable and gives it a value
let firstNumber = 12;
let secondNumber = 8;

// Expression statement: a calculation whose result is stored in a variable
let total = firstNumber + secondNumber;
console.log("Total of", firstNumber, "and", secondNumber, "is", total);

// Statements run from top to bottom, one after the other
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Block statement: curly braces { } group several statements together
{
  let blockMessage = "I am inside a block.";
  console.log(blockMessage);
}

// Joining text: concatenation (+) and template literals (backticks)
let courseName = "JavaScript";
let weekNumber = 3;
console.log("Learning " + courseName + " in Week " + weekNumber);  // concatenation
console.log(`Learning ${courseName} in Week ${weekNumber}`);       // template literal

// ---------- 5. Linking JavaScript to HTML ----------
// index.html loads this file with:  <script src="basics.js"></script>
// If you can read the line below in the browser console, the link works.
console.log("basics.js has finished running. If you see this in the browser, it is linked to index.html.");
