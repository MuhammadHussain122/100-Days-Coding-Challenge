/*
Explain how you can format a JSON string with proper indentation for readability.
*/
import chalk from "chalk";
const student = {
  name: "Ali",
  age: 12,
  city: "Karachi",
};
const jsonString = JSON.stringify(student);
console.log(chalk.green("JSON string without indentation:"));
console.log(jsonString);
const jsonStringWithIndentation = JSON.stringify(student, null, 2);
console.log(chalk.green("JSON string with proper indentation:"));
console.log(jsonStringWithIndentation);
