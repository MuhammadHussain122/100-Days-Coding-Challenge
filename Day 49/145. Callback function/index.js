/*
Create a functiom that accepts a callback and invokes it with some arguments.
*/
import chalk from "chalk";
let inner = function () {
    console.log(chalk.green('inner 1'));
};
let outer = function (callback) {
    console.log(chalk.green('outer 1'));
    callback();
    console.log(chalk.green('outer 2'));
};
console.log(chalk.green('test 1'));
outer(inner);
console.log(chalk.green('test 2'));
