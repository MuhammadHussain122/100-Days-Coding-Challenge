/*
Take a JSON string and parse it into a JavaScript object.
*/
import chalk from "chalk";
const jsonString = '{"name":"Ali","age":19,"city":"Karachi"}';
console.log(chalk.green("JSON string:"));
console.log(jsonString);
const person = JSON.parse(jsonString);
console.log(chalk.green("JavaScript Object:"));
console.log(person);
