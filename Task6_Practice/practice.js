// ============================================================
// Task 6 - Practice Programs
// Student : Aravind Kumar GS
// File    : practice.js
// Run     : node practice.js
//
// Six small programs that combine variables, data types, operators,
// conditions and loops. Each program is a function, and all of them are
// called at the bottom of the file. To run only one program, put // in
// front of the other calls at the bottom.
// No user input is read; all test values are written in the code.
// ============================================================

// ------------------------------------------------------------
// Program 1: Leap Year Checker
// Uses: const, number type, % operator, && and || logic, if/else, for loop
// ------------------------------------------------------------
function isLeapYear(year) {
  // A year is a leap year if divisible by 4 but not by 100, OR divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function program1LeapYears() {
  console.log("--- Program 1: Leap Year Checker (2020 to 2030) ---");
  for (let year = 2020; year <= 2030; year++) {
    if (isLeapYear(year)) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }
  // Special century cases
  console.log("1900 leap year?", isLeapYear(1900));   // false (divisible by 100, not 400)
  console.log("2000 leap year?", isLeapYear(2000));   // true  (divisible by 400)
  console.log("2100 leap year?", isLeapYear(2100));   // false
}

// ------------------------------------------------------------
// Program 2: Prime Numbers from 1 to 30
// Uses: let, boolean flag, nested loops, % operator, break, if
// ------------------------------------------------------------
function program2PrimeNumbers() {
  console.log("--- Program 2: Prime Numbers from 1 to 30 ---");
  let primeList = "";
  let primeCount = 0;

  for (let number = 1; number <= 30; number++) {
    let isPrime = true;
    if (number < 2) {
      isPrime = false;                       // 1 and below are not prime
    }
    // Only check divisors up to the square root of the number
    for (let divisor = 2; divisor * divisor <= number; divisor++) {
      if (number % divisor === 0) {
        isPrime = false;
        break;                               // no need to check further
      }
    }
    if (isPrime) {
      primeList += number + " ";
      primeCount++;
    }
  }
  console.log("Primes:", primeList.trim());
  console.log("Total primes found:", primeCount);
}

// ------------------------------------------------------------
// Program 3: FizzBuzz (1 to 15)
// Uses: for loop, % operator, if / else if / else, && logic, strings
// ------------------------------------------------------------
function program3FizzBuzz() {
  console.log("--- Program 3: FizzBuzz (1 to 15) ---");
  for (let number = 1; number <= 15; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
}

// ------------------------------------------------------------
// Program 4: Digit Sum, Reverse and Palindrome Check
// Uses: while loop, % and Math.floor, typeof/Number.isInteger validation, boolean
// ------------------------------------------------------------
function analyseNumber(number) {
  // Validation: only whole numbers that are 0 or greater
  if (typeof number !== "number" || !Number.isInteger(number) || number < 0) {
    console.log(number + " -> Invalid (use a whole number that is 0 or more)");
    return;
  }

  let remaining = number;
  let digitSum = 0;
  let reversed = 0;

  while (remaining > 0) {
    const lastDigit = remaining % 10;              // take the last digit
    digitSum += lastDigit;                         // add it to the sum
    reversed = reversed * 10 + lastDigit;          // build the reversed number
    remaining = Math.floor(remaining / 10);        // remove the last digit
  }

  const isPalindrome = reversed === number;
  console.log(`${number} -> digit sum: ${digitSum}, reversed: ${reversed}, palindrome: ${isPalindrome}`);
}

function program4DigitTools() {
  console.log("--- Program 4: Digit Sum, Reverse and Palindrome ---");
  analyseNumber(12345);
  analyseNumber(121);
  analyseNumber(1200);
  analyseNumber(0);
  analyseNumber(-5);
  analyseNumber(3.5);
}

// ------------------------------------------------------------
// Program 5: Temperature Table (Celsius to Fahrenheit)
// Uses: for loop with a step of 20, arithmetic operators, if / else if / else, template strings
// ------------------------------------------------------------
function program5TemperatureTable() {
  console.log("--- Program 5: Celsius to Fahrenheit Table ---");
  for (let celsius = 0; celsius <= 100; celsius += 20) {
    const fahrenheit = celsius * 9 / 5 + 32;
    let feeling;
    if (celsius < 15) {
      feeling = "Cold";
    } else if (celsius < 30) {
      feeling = "Pleasant";
    } else {
      feeling = "Hot";
    }
    console.log(`${celsius} C = ${fahrenheit} F (${feeling})`);
  }
}

// ------------------------------------------------------------
// Program 6: Factorials (0 to 10) and Fibonacci Series (first 10 terms)
// Uses: nested for loop, while loop, multiplication, variable swapping
// ------------------------------------------------------------
function program6FactorialAndFibonacci() {
  console.log("--- Program 6: Factorials and Fibonacci ---");

  // Factorial: n! = 1 x 2 x 3 x ... x n   (and 0! = 1)
  for (let n = 0; n <= 10; n++) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    console.log(`${n}! = ${factorial}`);
  }

  // Fibonacci: each term is the sum of the two terms before it
  let previous = 0;
  let current = 1;
  let termCount = 1;
  let series = "";
  while (termCount <= 10) {
    series += previous + " ";
    const next = previous + current;
    previous = current;
    current = next;
    termCount++;
  }
  console.log("First 10 Fibonacci numbers:", series.trim());
}

// ------------------------------------------------------------
// Run all programs one after another
// ------------------------------------------------------------
console.log("=== Task 6: Practice Programs ===\n");
program1LeapYears();
console.log("");
program2PrimeNumbers();
console.log("");
program3FizzBuzz();
console.log("");
program4DigitTools();
console.log("");
program5TemperatureTable();
console.log("");
program6FactorialAndFibonacci();
console.log("\nAll practice programs finished.");
