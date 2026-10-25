==============================================================
 InternNova - Week 3 Assignment: JavaScript Fundamentals (Part 1)
==============================================================
Student : Aravind Kumar GS
Package : WD_Week3_AravindKumarGS.zip
Marks   : 100 (Task 1: 15, Task 2: 20, Task 3: 20, Task 4: 20, Task 5: 20, Task 6: 5)


1. SETUP
--------------------------------------------------------------
Requirements:
  - Node.js (any recent version; the programs were run with Node v22).
    Check with:   node --version
    Download from https://nodejs.org if it is not installed.
  - A web browser (Chrome, Edge or Firefox) for Task 1's index.html.

No npm install is needed. No libraries or frameworks are used.
No program reads user input; all test values are written in the code.


2. FOLDER STRUCTURE AND FILE DESCRIPTIONS
--------------------------------------------------------------
WD_Week3_AravindKumarGS/
|-- README.txt                       This file
|-- Task1_Basics/
|     |-- index.html                 Page that links basics.js (plus a small inline script demo)
|     |-- basics.js                  Syntax, console.log(), comments, basic statements
|     |-- expected_output.txt        Output captured from running basics.js with Node
|-- Task2_Variables/
|     |-- variables.js               let, const, declaration, assignment, data types, typeof,
|     |                              and the typeof null quirk explained
|     |-- expected_output.txt
|-- Task3_Operators/
|     |-- operators.js               Arithmetic, assignment, comparison, logical,
|     |                              increment and decrement operators
|     |-- expected_output.txt
|-- Task4_Conditionals/
|     |-- conditionals.js            if, if...else, else if, nested if, logical conditions:
|     |                              positive/negative/zero, even/odd, age eligibility,
|     |                              greatest of two and three, grade calculation (marks 0-100)
|     |-- expected_output.txt
|-- Task5_Loops/
|     |-- loops.js                   for, while, do...while: numbers 1-10, even, odd,
|     |                              multiplication tables, sums, reverse counting
|     |-- expected_output.txt
|-- Task6_Practice/
      |-- practice.js                Six practice programs: leap years, prime numbers,
      |                              FizzBuzz, digit sum/reverse/palindrome,
      |                              temperature table, factorials and Fibonacci
      |-- expected_output.txt


3. HOW TO RUN
--------------------------------------------------------------
Open a terminal (Command Prompt, PowerShell or Terminal), go into the
project folder, then run each file from inside its own task folder:

  cd WD_Week3_AravindKumarGS

  cd Task1_Basics       && node basics.js        && cd ..
  cd Task2_Variables    && node variables.js     && cd ..
  cd Task3_Operators    && node operators.js     && cd ..
  cd Task4_Conditionals && node conditionals.js  && cd ..
  cd Task5_Loops        && node loops.js         && cd ..
  cd Task6_Practice     && node practice.js      && cd ..

(If "&&" does not work in your shell, run the cd and node commands
 on separate lines.)

Task 1 in the browser:
  1. Double-click Task1_Basics/index.html to open it in a browser.
  2. Press F12 and open the "Console" tab.
  3. You will see one message from the inline script and then the
     output of basics.js.

Task 6: all six programs run one after another. To run only one,
put // in front of the other function calls at the bottom of practice.js.


4. TESTING INSTRUCTIONS
--------------------------------------------------------------
Each task folder contains expected_output.txt, which holds the output
produced by running that task's program with Node.js. To check your own run:

  Mac / Linux :  node loops.js | diff - expected_output.txt
  Windows     :  node loops.js > my_output.txt
                 fc my_output.txt expected_output.txt

No difference reported means the output matches.

Edge cases covered by the code (see the matching expected_output.txt):
  - Task 2 : typeof null returns "object" (quirk explained in comments);
             const reassignment is caught and reported as a TypeError
  - Task 3 : 10 / 0 gives Infinity, 0 / 0 gives NaN, 0.1 + 0.2 rounding,
             == versus ===, pre/post increment and decrement
  - Task 4 : zero, negative and decimal inputs; ages -5, 0, 18 and 150;
             marks -1, 0, 49, 50, 89.5, 90, 100 and 101; text and NaN
             rejected as invalid marks; ties in greatest-of-two/three
  - Task 5 : while loop that runs zero times versus do...while that
             runs once; counting down with i-- and -= 2
  - Task 6 : years 1900, 2000 and 2100; numbers 0, 1200, negative and
             decimal for the digit program; 0! = 1


5. NOTES
--------------------------------------------------------------
- No DOM manipulation and no event handling are used anywhere.
  index.html only loads the scripts; the output appears in the console.
- Functions are used in Tasks 4 and 6 only as reusable test blocks, so a
  rule can be tried with several fixed values.
- The files were run with Node.js. index.html was checked by confirming
  that its script link points to basics.js in the same folder; basics.js
  itself runs without errors in Node.
