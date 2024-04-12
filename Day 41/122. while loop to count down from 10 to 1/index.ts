/*
Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5
*/

import chalk from "chalk";

let a: number = 10;
while (a > 0) {
  if (a === 5) {
    break;
  }
  console.log(chalk.green(a));
  a--;
}
