/*
Implement a try-catch block to handle potential errors in a block of code.
*/
import chalk from "chalk";
try {
  throw new Error("Something went wrong"); // error
} catch (error) {
  console.log(chalk.green(error)); // error details
}
