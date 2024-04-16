/*
 Discuss the difference between default and named exports in JavaScript modules.
*/import chalk from "chalk";
export const utilOne = ()=> {
    console.log(chalk.green("named export 1"));
}
export const utilTwo = ()=> {
    console.log(chalk.green("named export 2"));
}