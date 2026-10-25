// ============================================================
// Task 2 - Variables and Data Types
// Student : Aravind Kumar GS
// File    : variables.js
// Run     : node variables.js
// ============================================================

console.log("=== Task 2: Variables and Data Types ===");

// ---------- 1. let (value can change) ----------
console.log("\n--- 1. let ---");
let studentName = "Aravind Kumar GS";
let studentScore = 85;
console.log("studentName:", studentName);
console.log("studentScore:", studentScore);

studentScore = 90; // reassigning a let variable is allowed
console.log("studentScore after reassignment:", studentScore);

// ---------- 2. const (value cannot be reassigned) ----------
console.log("\n--- 2. const ---");
const courseName = "JavaScript Fundamentals";
const PI_VALUE = 3.14159;
console.log("courseName:", courseName);
console.log("PI_VALUE:", PI_VALUE);

// Trying to change a const causes a TypeError. We catch it so the program keeps running.
try {
  PI_VALUE = 3;
} catch (error) {
  console.log("Cannot change a const ->", error.name + ":", error.message);
}
console.log("PI_VALUE is still:", PI_VALUE);

// ---------- 3. Declaration vs assignment ----------
console.log("\n--- 3. Declaration and assignment ---");
let city;                    // declaration only: no value yet, so it is undefined
console.log("city after declaration:", city);
city = "Madurai";            // assignment: giving the variable a value
console.log("city after assignment:", city);

let currentYear = 2026;      // declaration + initial assignment in one line
console.log("currentYear:", currentYear);

let a = 1, b = 2, c = 3;     // declaring several variables in one statement
console.log("a, b, c:", a, b, c);

// ---------- 4. Data types ----------
console.log("\n--- 4. Data types and typeof ---");

// String: text inside single quotes, double quotes or backticks
const greeting = "Hello";
const singleQuoted = 'Single quotes work too';
const templateText = `Template literal: ${greeting}, ${studentName}`;
console.log("String examples:", greeting, "|", singleQuoted, "|", templateText);
console.log("typeof greeting:", typeof greeting);              // "string"

// Number: whole numbers and decimals share one type
const wholeNumber = 42;
const decimalNumber = 3.14;
const negativeNumber = -7;
console.log("Number examples:", wholeNumber, decimalNumber, negativeNumber);
console.log("typeof wholeNumber:", typeof wholeNumber);        // "number"
console.log("typeof decimalNumber:", typeof decimalNumber);    // "number"

// Boolean: only true or false
const isLoggedIn = true;
const isFinished = false;
console.log("Boolean examples:", isLoggedIn, isFinished);
console.log("typeof isLoggedIn:", typeof isLoggedIn);          // "boolean"

// undefined: a variable that was declared but never given a value
let notAssigned;
console.log("notAssigned:", notAssigned);
console.log("typeof notAssigned:", typeof notAssigned);        // "undefined"

// null: a value that means "intentionally empty"
const emptyValue = null;
console.log("emptyValue:", emptyValue);
console.log("typeof emptyValue:", typeof emptyValue);          // "object"  <-- see the quirk below

// ---------- 5. The typeof null quirk ----------
console.log("\n--- 5. The typeof null quirk ---");
// typeof null returns "object". This is a famous historical bug, not a feature.
//
// Why it happens:
//   - In the very first version of JavaScript, each value was stored with a small
//     "type tag". The tag for objects was 0, and null was represented by the NULL
//     pointer (all bits zero). So typeof looked at the tag, saw 0, and said "object".
//   - It was never fixed because correcting it would break a huge amount of
//     existing code on the web.
//
// The important facts:
//   - null is NOT an object. It is a primitive value meaning "no value on purpose".
//   - To check for null, compare directly with ===  (do not rely on typeof).
console.log('typeof null gives:', typeof null, '(a historical quirk)');
console.log("Is emptyValue really null? ->", emptyValue === null);
console.log("Is emptyValue a real object? ->", typeof emptyValue === "object" && emptyValue !== null);

// ---------- 6. undefined vs null ----------
console.log("\n--- 6. undefined vs null ---");
// undefined = JavaScript says "no value has been assigned yet"
// null      = the programmer says "this is empty on purpose"
console.log("undefined == null  :", undefined == null);   // true  (loose equality)
console.log("undefined === null :", undefined === null);  // false (different types)

// typeof is safe even for a variable that was never declared (it does not crash)
console.log("typeof neverDeclaredVariable:", typeof neverDeclaredVariable); // "undefined"

// ---------- 7. Summary ----------
console.log("\n--- 7. Summary of typeof results ---");
console.log("typeof 'text'    ->", typeof "text");
console.log("typeof 100       ->", typeof 100);
console.log("typeof 2.5       ->", typeof 2.5);
console.log("typeof true      ->", typeof true);
console.log("typeof undefined ->", typeof undefined);
console.log("typeof null      ->", typeof null);
console.log("typeof NaN       ->", typeof NaN, "(NaN means 'Not a Number' but is still of type number)");
