/*
Write a JavaScript object and convert it into a JSON string.
*/
import chalk from "chalk";
const student = {
  name: "Hussain",
  id: 123,
  city: "Skardu",
};
console.log(chalk.green("JavaScript Object:"));
console.log(student);
console.log(chalk.green("JSON string:"));
const jsonString = JSON.stringify(student);

console.log(jsonString);
