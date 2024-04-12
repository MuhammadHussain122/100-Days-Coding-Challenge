/*
Create a loop that iterates through a string and stops when it finds the first vowel.
*/

import chalk from "chalk";
import inquirer from "inquirer";

async function stopLogAtVowel() {
  let inputString = await inquirer.prompt({
    name: "input",
    message: "input a string",
    type: "input",
  });
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  for (const char of inputString.input) {
    if (vowels.includes(char)) {
      console.log(chalk.green(`First vowel found: ${char}`));
      break; 
    }
    console.log(chalk.yellow(char)); 
  }
}
async function stopLogAtVowelAgain() {
  do {
    await stopLogAtVowel();
    var inputStringAgain = await inquirer.prompt({
      name: "inputAgain",
      message: "Do you want to input another string? y/n",
      type: "input",
    });
  } while (
    inputStringAgain.inputAgain === "y" ||
    inputStringAgain.inputAgain === "Y" ||
    inputStringAgain.inputAgain === "yes" ||
    inputStringAgain.inputAgain === "Yes" ||
    inputStringAgain.inputAgain === "YES"
  );
}
stopLogAtVowelAgain();
