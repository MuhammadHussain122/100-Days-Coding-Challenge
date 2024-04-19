/*
Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
*/
import chalk from "chalk";
const promise = new Promise((resolve, reject) => {
    const x = 5;
    if (x > 5) {
        resolve(chalk.green("Promise fulfilled"));
    }
    else {
        reject(new Error(chalk.green("Promise not fulfilled")));
    }
});
promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
