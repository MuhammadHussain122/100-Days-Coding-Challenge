/* Categorize a person's age group:
Use an if-else-if chain to categorize a person's age group.
*/
import inquirer from "inquirer";
import chalk from "chalk";
async function getPersonAgeGroup() {
  let inputPersonAge = await inquirer.prompt({
    name: "inputAge",
    message: "enter the person's age",
    type: "number",
  });

  if (inputPersonAge.inputAge < 2 && inputPersonAge.inputAge > 0) {
    console.log("The person is a baby");
  } else if (inputPersonAge.inputAge >= 2 && inputPersonAge.inputAge < 4) {
    console.log("The person is a toddler");
  } else if (inputPersonAge.inputAge >= 4 && inputPersonAge.inputAge < 13) {
    console.log("The person is a kid");
  } else if (inputPersonAge.inputAge >= 13 && inputPersonAge.inputAge < 20) {
    console.log("The person is a teenager");
  } else if (inputPersonAge.inputAge >= 20 && inputPersonAge.inputAge < 65) {
    console.log("The person is an adult");
  } else if (inputPersonAge.inputAge >= 65) {
    console.log("The person is an elder");
  }
  else{
    console.log(chalk.red("Invalid input"));
  }
}
async function getPersonAgeGroupAgain() {
  do {
    await getPersonAgeGroup();
    var inputPersonAgeAgain = await inquirer.prompt({
      name: "inputAgeAgain",
      message: "Do you want to check for another age group?",
      type: "input",
    });
  } while (
    inputPersonAgeAgain.inputAgeAgain === "y" ||
    inputPersonAgeAgain.inputAgeAgain === "yes" ||
    inputPersonAgeAgain.inputAgeAgain === "Y" ||
    inputPersonAgeAgain.inputAgeAgain === "Yes"
  );
}
getPersonAgeGroupAgain();
