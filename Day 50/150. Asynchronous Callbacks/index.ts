/*
Describe how asynchronous callbacks differ from synchronous code execution.
*/

import chalk from "chalk";
// Synchronous
console.log(chalk.green("1st"));
for (let i = 0; i < 1e9; i++) {} // A long loop
console.log(chalk.green("2nd"));

// Asynchronous 
console.log(chalk.green("3rd"));
setTimeout(() => {
  console.log(chalk.green("4th")); // executes after one second.
}, 1000);
console.log(chalk.green("5th"));  // executes immediately.
/* Demonstrates how the rest of the code continues to 
execute without waiting for the asynchronous operation.*/