/*
Explain the concept of the event loop in JavaScript with an example.
*/
import chalk from "chalk";
console.log(chalk.green("start"));
setTimeout(() => {
    console.log(chalk.green("callback executed"));
}, 0);
console.log(chalk.green("End"));
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
