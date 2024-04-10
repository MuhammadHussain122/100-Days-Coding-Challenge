/*
Use switch statement to log the days of the week based on a number(1-7).
*/
import inquirer from "inquirer";
import chalk from "chalk";
async function getDaysOfTheWeek() {
    let inputNumRepresentingDay = await inquirer.prompt({
        name: "inputNum",
        message: "enter a number(1- 7) ",
        type: "number",
    });
    switch (inputNumRepresentingDay.inputNum) {
        case 1:
            console.log(chalk.green("Monday"));
            break;
        case 2:
            console.log(chalk.green("Tuesday"));
            break;
        case 3:
            console.log(chalk.green("Wednesday"));
            break;
        case 4:
            console.log(chalk.green("Thursday"));
            break;
        case 5:
            console.log(chalk.green("Friday"));
            break;
        case 6:
            console.log(chalk.green("Saturday"));
            break;
        case 7:
            console.log(chalk.green("Sunday"));
            break;
        default:
            console.log(chalk.red("Invalid Input"));
            break;
    }
}
async function getDaysOfTheWeekAgain() {
    do {
        await getDaysOfTheWeek();
        var inputNumAgain = await inquirer.prompt({
            name: "inputAgain",
            message: "enter a number again? 'yes or no'",
            type: "input",
        });
    } while (inputNumAgain.inputAgain === "y" ||
        inputNumAgain.inputAgain === "yes" ||
        inputNumAgain.inputAgain === "Y" ||
        inputNumAgain.inputAgain === "Yes" ||
        inputNumAgain.inputAgain === "YES");
}
getDaysOfTheWeekAgain();
