/* 
Create a switch case that matches several cases to the same code block, representing seasons.
*/
import inquirer from "inquirer";
import chalk from "chalk";
async function getSeasonOfTheYear() {
  let inputNumRepresentingSeason = await inquirer.prompt({
    name: "inputNum",
    message: "enter a number(1- 12) ",
    type: "number",
  });
  switch (inputNumRepresentingSeason.inputNum) {
    case 12:
    case 1:
    case 2:
      console.log(chalk.green("Winter"));
      break;
    case 3:
    case 4:
    case 5:
      console.log(chalk.green("Spring"));
      break;
    case 6:
    case 7:
    case 8:
      console.log(chalk.green("Summer"));
      break;
    case 9:
    case 10:
    case 11:
      console.log(chalk.green("Autumn"));
      break;
    default:
        console.log(chalk.red("Invalid Input"));
        break;
  }
}

async function getSeasonOfTheYearAgain() {
  do {
    await getSeasonOfTheYear();
    var inputNumAgain = await inquirer.prompt({
      name: "inputAgain",
      message: "enter a number again? 'yes/no'",
      type: "input"
    });
  } while (
    inputNumAgain.inputAgain === "y" ||
    inputNumAgain.inputAgain === "yes" ||
    inputNumAgain.inputAgain === "Y" ||
    inputNumAgain.inputAgain === "Yes" ||
    inputNumAgain.inputAgain === "YES"
  );
}
getSeasonOfTheYearAgain();
