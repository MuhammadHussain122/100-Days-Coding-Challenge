/*
Describe how to use breakpoints in browser developer tools to debug JavaScript code.
*/

import chalk from "chalk";

console.log(chalk.green("Before breakpoint"));
console.log(
  chalk.green(
    "This line has a breakpoint set on it in the browser's developer tools"
  )
);
console.log(chalk.green("After breakpoint"));
