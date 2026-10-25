// ============================================================
// Task 4 - Conditional Statements
// Student : Aravind Kumar GS
// File    : conditionals.js
// Run     : node conditionals.js
//
// Note: each program below is written as a small function (a reusable block of
// code) so that we can test it with several fixed values, including edge cases.
// No user input is read; all test values are written in the code.
// ============================================================

console.log("=== Task 4: Conditional Statements ===");

// ---------- 1. Positive, negative or zero (if / else if / else) ----------
function checkNumberSign(number) {
  if (typeof number !== "number" || Number.isNaN(number)) {
    return "Invalid input: not a number";
  }
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log("\n--- 1. Positive / Negative / Zero ---");
console.log("5     ->", checkNumberSign(5));
console.log("-12   ->", checkNumberSign(-12));
console.log("0     ->", checkNumberSign(0));
console.log("0.5   ->", checkNumberSign(0.5));
console.log("'abc' ->", checkNumberSign("abc"));

// ---------- 2. Even or odd (if...else) ----------
function checkEvenOdd(number) {
  if (!Number.isInteger(number)) {
    return "Invalid input: use a whole number";
  }
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("\n--- 2. Even / Odd ---");
console.log("10  ->", checkEvenOdd(10));
console.log("7   ->", checkEvenOdd(7));
console.log("0   ->", checkEvenOdd(0));
console.log("-4  ->", checkEvenOdd(-4));
console.log("-3  ->", checkEvenOdd(-3));
console.log("2.5 ->", checkEvenOdd(2.5));

// ---------- 3. Age eligibility (comparison + logical conditions) ----------
function checkVotingEligibility(age) {
  // Reject anything that is not a sensible whole-number age
  if (!Number.isInteger(age) || age < 0 || age > 120) {
    return "Invalid age";
  }
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible (needs " + (18 - age) + " more year(s))";
  }
}

console.log("\n--- 3. Age eligibility (voting age 18) ---");
console.log("Age 25  ->", checkVotingEligibility(25));
console.log("Age 18  ->", checkVotingEligibility(18));
console.log("Age 17  ->", checkVotingEligibility(17));
console.log("Age 0   ->", checkVotingEligibility(0));
console.log("Age -5  ->", checkVotingEligibility(-5));
console.log("Age 150 ->", checkVotingEligibility(150));
console.log("Age '20' (text) ->", checkVotingEligibility("20"));

// ---------- 4. Nested if (an if inside another if) ----------
function checkDrivingLicense(age, hasIdProof, passedTest) {
  if (age >= 18) {
    if (hasIdProof) {
      if (passedTest) {
        return "License approved";
      } else {
        return "License denied: driving test not passed";
      }
    } else {
      return "License denied: ID proof missing";
    }
  } else {
    return "License denied: must be 18 or older";
  }
}

console.log("\n--- 4. Nested if (driving license) ---");
console.log("Age 20, ID yes, test passed    ->", checkDrivingLicense(20, true, true));
console.log("Age 20, ID yes, test failed    ->", checkDrivingLicense(20, true, false));
console.log("Age 20, ID missing             ->", checkDrivingLicense(20, false, true));
console.log("Age 16, ID yes, test passed    ->", checkDrivingLicense(16, true, true));

// ---------- 5. Greatest of two numbers ----------
function greatestOfTwo(first, second) {
  if (first > second) {
    return "Greatest is " + first;
  } else if (second > first) {
    return "Greatest is " + second;
  } else {
    return "Both numbers are equal (" + first + ")";
  }
}

console.log("\n--- 5. Greatest of two numbers ---");
console.log("(8, 3)   ->", greatestOfTwo(8, 3));
console.log("(2, 9)   ->", greatestOfTwo(2, 9));
console.log("(5, 5)   ->", greatestOfTwo(5, 5));
console.log("(-1, -6) ->", greatestOfTwo(-1, -6));

// ---------- 6. Greatest of three numbers (logical && condition) ----------
function greatestOfThree(first, second, third) {
  if (first >= second && first >= third) {
    return "Greatest is " + first;
  } else if (second >= first && second >= third) {
    return "Greatest is " + second;
  } else {
    return "Greatest is " + third;
  }
}

console.log("\n--- 6. Greatest of three numbers ---");
console.log("(5, 9, 3)     ->", greatestOfThree(5, 9, 3));
console.log("(10, 4, 7)    ->", greatestOfThree(10, 4, 7));
console.log("(1, 2, 3)     ->", greatestOfThree(1, 2, 3));
console.log("(10, 10, 5)   ->", greatestOfThree(10, 10, 5));
console.log("(7, 7, 7)     ->", greatestOfThree(7, 7, 7));
console.log("(-1, -5, -3) ->", greatestOfThree(-1, -5, -3));

// ---------- 7. Grade calculation with marks validation ----------
// Marks must be a real number between 0 and 100 (both included).
function isValidMarks(marks) {
  if (typeof marks !== "number" || Number.isNaN(marks)) {
    return false;                      // text, undefined, NaN, etc.
  }
  if (marks < 0 || marks > 100) {      // logical OR: outside the allowed range
    return false;
  }
  return true;
}

function calculateGrade(marks) {
  if (!isValidMarks(marks)) {
    return "Invalid marks (must be a number from 0 to 100)";
  }
  if (marks >= 90) {
    return "Grade A+ (Outstanding)";
  } else if (marks >= 80) {
    return "Grade A (Excellent)";
  } else if (marks >= 70) {
    return "Grade B (Good)";
  } else if (marks >= 60) {
    return "Grade C (Average)";
  } else if (marks >= 50) {
    return "Grade D (Pass)";
  } else {
    return "Grade F (Fail)";
  }
}

console.log("\n--- 7. Grade calculation (marks 0 to 100) ---");
console.log("Marks 100  ->", calculateGrade(100));
console.log("Marks 95   ->", calculateGrade(95));
console.log("Marks 90   ->", calculateGrade(90));
console.log("Marks 89.5 ->", calculateGrade(89.5));
console.log("Marks 75   ->", calculateGrade(75));
console.log("Marks 65   ->", calculateGrade(65));
console.log("Marks 50   ->", calculateGrade(50));
console.log("Marks 49   ->", calculateGrade(49));
console.log("Marks 0    ->", calculateGrade(0));
console.log("Marks -1   ->", calculateGrade(-1));
console.log("Marks 101  ->", calculateGrade(101));
console.log("Marks 'abc'->", calculateGrade("abc"));
console.log("Marks NaN  ->", calculateGrade(NaN));

// ---------- 8. Logical conditions (&&, ||, !) in an if statement ----------
console.log("\n--- 8. Logical conditions ---");
const temperature = 28;
const isRaining = false;
const isSaturday = false;
const isSunday = true;

if (temperature > 25 && !isRaining) {
  console.log("Warm and dry: good day for a walk.");
} else if (temperature > 25 && isRaining) {
  console.log("Warm but rainy: take an umbrella.");
} else {
  console.log("Cool day: take a jacket.");
}

if (isSaturday || isSunday) {
  console.log("It is the weekend.");
} else {
  console.log("It is a weekday.");
}
