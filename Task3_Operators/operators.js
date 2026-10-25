// ============================================================
// Task 3 - Operators
// Student : Aravind Kumar GS
// File    : operators.js
// Run     : node operators.js
// ============================================================

console.log("=== Task 3: Operators ===");

// ---------- 1. Arithmetic operators ----------
console.log("\n--- 1. Arithmetic operators ---");
const x = 15;
const y = 4;
console.log("x =", x, ", y =", y);
console.log("x + y  (addition)       =", x + y);    // 19
console.log("x - y  (subtraction)    =", x - y);    // 11
console.log("x * y  (multiplication) =", x * y);    // 60
console.log("x / y  (division)       =", x / y);    // 3.75
console.log("x % y  (remainder)      =", x % y);    // 3
console.log("x ** y (power)          =", x ** y);   // 50625

// Edge cases worth knowing
console.log("10 / 0  =", 10 / 0);                   // Infinity (no crash in JavaScript)
console.log("0 / 0   =", 0 / 0);                    // NaN
console.log("10 % 0  =", 10 % 0);                   // NaN
console.log("0.1 + 0.2 =", 0.1 + 0.2);              // 0.30000000000000004 (decimal rounding)
console.log("'5' + 5 =", "5" + 5);                  // "55" (+ joins text)
console.log("'5' - 2 =", "5" - 2);                  // 3   (- converts text to a number)

// ---------- 2. Assignment operators ----------
console.log("\n--- 2. Assignment operators ---");
let score = 10;
console.log("score = 10        ->", score);
score += 5;                                         // same as score = score + 5
console.log("score += 5        ->", score);         // 15
score -= 3;
console.log("score -= 3        ->", score);         // 12
score *= 2;
console.log("score *= 2        ->", score);         // 24
score /= 4;
console.log("score /= 4        ->", score);         // 6
score %= 4;
console.log("score %= 4        ->", score);         // 2
score **= 3;
console.log("score **= 3       ->", score);         // 8

// ---------- 3. Comparison operators ----------
console.log("\n--- 3. Comparison operators ---");
const num1 = 10;
const num2 = 20;
const numberFive = 5;
const textFive = "5";
console.log("num1 =", num1, ", num2 =", num2);
console.log("num1 == num2  :", num1 == num2);       // false
console.log("num1 != num2  :", num1 != num2);       // true
console.log("num1 > num2   :", num1 > num2);        // false
console.log("num1 < num2   :", num1 < num2);        // true
console.log("num1 >= 10    :", num1 >= 10);         // true
console.log("num2 <= 15    :", num2 <= 15);         // false

// == compares values only (it converts types). === compares value AND type.
console.log("5 == '5'      :", numberFive == textFive);   // true
console.log("5 === '5'     :", numberFive === textFive);  // false
console.log("5 != '5'      :", numberFive != textFive);   // false
console.log("5 !== '5'     :", numberFive !== textFive);  // true
console.log("Tip: prefer === and !== because they avoid surprising type conversion.");

// ---------- 4. Logical operators ----------
console.log("\n--- 4. Logical operators ---");
const isAdult = true;
const hasTicket = false;
console.log("isAdult =", isAdult, ", hasTicket =", hasTicket);
console.log("isAdult && hasTicket :", isAdult && hasTicket);  // false (both must be true)
console.log("isAdult || hasTicket :", isAdult || hasTicket);  // true  (at least one is true)
console.log("!isAdult             :", !isAdult);              // false (reverses the value)
console.log("!hasTicket           :", !hasTicket);            // true

// Logical operators combined with comparisons
const age = 25;
console.log("age > 18 && age < 60  :", age > 18 && age < 60);   // true
console.log("age < 18 || age > 60  :", age < 18 || age > 60);   // false
console.log("!(age > 18)           :", !(age > 18));            // false

// ---------- 5. Increment and decrement operators ----------
console.log("\n--- 5. Increment and decrement operators ---");
let counter = 5;
console.log("counter starts at:", counter);

// Post-increment: uses the current value first, then adds 1
console.log("counter++ gives   :", counter++);   // prints 5
console.log("counter is now    :", counter);     // 6

// Pre-increment: adds 1 first, then uses the new value
console.log("++counter gives   :", ++counter);   // prints 7
console.log("counter is now    :", counter);     // 7

// Post-decrement and pre-decrement work the same way, but subtract 1
console.log("counter-- gives   :", counter--);   // prints 7
console.log("counter is now    :", counter);     // 6
console.log("--counter gives   :", --counter);   // prints 5
console.log("counter is now    :", counter);     // 5

// The difference matters when the result is stored in another variable
let p = 5;
let q = p++;      // q gets 5 (old value), then p becomes 6
let r = 5;
let s = ++r;      // r becomes 6 first, then s gets 6
console.log("After q = p++ -> p:", p, ", q:", q);   // p: 6, q: 5
console.log("After s = ++r -> r:", r, ", s:", s);   // r: 6, s: 6
