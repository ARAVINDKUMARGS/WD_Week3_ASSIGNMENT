// ============================================================
// Task 5 - Loops
// Student : Aravind Kumar GS
// File    : loops.js
// Run     : node loops.js
//
// Every loop below has three essential parts:
//   1. a starting value, 2. a condition that eventually becomes false,
//   3. an increment or decrement that moves the counter toward that end.
// (If the counter never changes, the loop never ends: an infinite loop.)
// ============================================================

console.log("=== Task 5: Loops ===");

// ---------- 1. Numbers 1 to 10 with for, while and do...while ----------
console.log("\n--- 1. Print numbers 1 to 10 ---");

// for loop: start; condition; update
let forLine = "";
for (let i = 1; i <= 10; i++) {
  forLine += i + " ";
}
console.log("for         :", forLine.trim());

// while loop: checks the condition BEFORE each round
let whileCounter = 1;
let whileLine = "";
while (whileCounter <= 10) {
  whileLine += whileCounter + " ";
  whileCounter++;                  // do not forget the update
}
console.log("while       :", whileLine.trim());

// do...while loop: runs the body first, checks the condition AFTER each round
let doWhileCounter = 1;
let doWhileLine = "";
do {
  doWhileLine += doWhileCounter + " ";
  doWhileCounter++;
} while (doWhileCounter <= 10);
console.log("do...while  :", doWhileLine.trim());

// ---------- 2. Even numbers ----------
console.log("\n--- 2. Even numbers from 1 to 20 ---");

// Method A: jump by 2 starting from 2
let evenLine = "";
for (let even = 2; even <= 20; even += 2) {
  evenLine += even + " ";
}
console.log("Jump by 2        :", evenLine.trim());

// Method B: check every number with the remainder operator
let evenCheckLine = "";
for (let n = 1; n <= 20; n++) {
  if (n % 2 === 0) {
    evenCheckLine += n + " ";
  }
}
console.log("Using n % 2 === 0:", evenCheckLine.trim());

// ---------- 3. Odd numbers ----------
console.log("\n--- 3. Odd numbers from 1 to 20 ---");
let oddLine = "";
let oddCounter = 1;
while (oddCounter <= 20) {
  oddLine += oddCounter + " ";
  oddCounter += 2;                 // 1, 3, 5, ...
}
console.log("while (jump by 2):", oddLine.trim());

// ---------- 4. Multiplication tables ----------
console.log("\n--- 4. Multiplication tables ---");

// Table of 5 with a for loop
const tableOfFive = 5;
console.log("Table of 5 (for):");
for (let i = 1; i <= 10; i++) {
  console.log(`${tableOfFive} x ${i} = ${tableOfFive * i}`);
}

// Table of 7 with a while loop
const tableOfSeven = 7;
let whileTableCounter = 1;
console.log("Table of 7 (while):");
while (whileTableCounter <= 10) {
  console.log(`${tableOfSeven} x ${whileTableCounter} = ${tableOfSeven * whileTableCounter}`);
  whileTableCounter++;
}

// Table of 9 with a do...while loop
const tableOfNine = 9;
let doWhileTableCounter = 1;
console.log("Table of 9 (do...while):");
do {
  console.log(`${tableOfNine} x ${doWhileTableCounter} = ${tableOfNine * doWhileTableCounter}`);
  doWhileTableCounter++;
} while (doWhileTableCounter <= 10);

// ---------- 5. Sums ----------
console.log("\n--- 5. Sums ---");

// Sum of 1 to 100 with for (expected 5050)
let sumToHundred = 0;
for (let i = 1; i <= 100; i++) {
  sumToHundred += i;
}
console.log("Sum of 1 to 100 (for)         :", sumToHundred);

// Sum of 1 to 10 with while (expected 55)
let sumToTen = 0;
let sumCounter = 1;
while (sumCounter <= 10) {
  sumToTen += sumCounter;
  sumCounter++;
}
console.log("Sum of 1 to 10 (while)        :", sumToTen);

// Sum of even numbers from 2 to 20 with do...while (expected 110)
let sumOfEvens = 0;
let evenSumCounter = 2;
do {
  sumOfEvens += evenSumCounter;
  evenSumCounter += 2;
} while (evenSumCounter <= 20);
console.log("Sum of evens 2 to 20 (do...while):", sumOfEvens);

// Sum of odd numbers from 1 to 19 with for (expected 100)
let sumOfOdds = 0;
for (let odd = 1; odd <= 19; odd += 2) {
  sumOfOdds += odd;
}
console.log("Sum of odds 1 to 19 (for)     :", sumOfOdds);

// ---------- 6. Reverse counting ----------
console.log("\n--- 6. Reverse counting ---");

// for loop counting down: start high, use i--, condition i >= 1
let reverseForLine = "";
for (let i = 10; i >= 1; i--) {
  reverseForLine += i + " ";
}
console.log("10 down to 1 (for)        :", reverseForLine.trim());

// while loop counting down by 2
let reverseWhileLine = "";
let reverseWhileCounter = 20;
while (reverseWhileCounter >= 2) {
  reverseWhileLine += reverseWhileCounter + " ";
  reverseWhileCounter -= 2;
}
console.log("20 down to 2 by 2 (while)  :", reverseWhileLine.trim());

// do...while loop counting down
let reverseDoWhileLine = "";
let reverseDoWhileCounter = 5;
do {
  reverseDoWhileLine += reverseDoWhileCounter + " ";
  reverseDoWhileCounter--;
} while (reverseDoWhileCounter >= 1);
console.log("5 down to 1 (do...while)   :", reverseDoWhileLine.trim());
console.log("Blast off!");

// ---------- 7. while vs do...while when the condition is false at the start ----------
console.log("\n--- 7. while vs do...while (condition already false) ---");
let startValue = 100;

while (startValue < 5) {
  console.log("This line never prints because the while condition is false from the start.");
}
console.log("while loop: body ran 0 times.");

do {
  console.log("do...while loop: body ran once even though 100 < 5 is false.");
} while (startValue < 5);
