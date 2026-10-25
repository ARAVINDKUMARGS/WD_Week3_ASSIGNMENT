// Runner script to execute all tasks sequentially
const cp = require('child_process');
const path = require('path');

const tasks = [
  { name: 'Task 1: Basics', file: 'Task1_Basics/basics.js' },
  { name: 'Task 2: Variables', file: 'Task2_Variables/variables.js' },
  { name: 'Task 3: Operators', file: 'Task3_Operators/operators.js' },
  { name: 'Task 4: Conditionals', file: 'Task4_Conditionals/conditionals.js' },
  { name: 'Task 5: Loops', file: 'Task5_Loops/loops.js' },
  { name: 'Task 6: Practice', file: 'Task6_Practice/practice.js' }
];

console.log('='.repeat(65));
console.log(' InternNova - Week 3 JavaScript Fundamentals Runner');
console.log('='.repeat(65));

for (const task of tasks) {
  console.log(`\n>>> [${task.name}] Running ${task.file}...`);
  console.log('-'.repeat(65));
  try {
    const output = cp.execSync(`node "${task.file}"`, { cwd: __dirname, encoding: 'utf-8' });
    process.stdout.write(output);
  } catch (err) {
    console.error(`Error executing ${task.file}:`, err.message);
  }
}

console.log('\n' + '='.repeat(65));
console.log(' All tasks completed successfully!');
console.log('='.repeat(65));
