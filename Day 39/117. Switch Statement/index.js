// Uses a switch statement to evaluate the grade and defaults to "Invalid grade" if no match is found.
import inquirer from "inquirer";
import chalk from "chalk";
async function evaluateGrade() {
    let inputGrade = await inquirer.prompt({
        name: "inputUserGrade",
        message: "enter your grade",
        type: "input",
    });
    switch (inputGrade.inputUserGrade) {
        case "A":
            console.log(chalk.green("Excellent"));
            break;
        case "B":
            console.log(chalk.green("Good"));
            break;
        case "C":
            console.log(chalk.green("Satisfactory"));
            break;
        case "D":
            console.log(chalk.green("Nill"));
            break;
        case "F":
            console.log(chalk.red("Fail"));
            break;
        default:
            console.log(chalk.red("Invalid grade"));
            break;
    }
}
async function evaluateGradeAgain() {
    do {
        await evaluateGrade();
        var inputGradeAgain = await inquirer.prompt({
            name: "inputGrade",
            message: "Do you want to evaluate your grade again? y/n",
            type: "input"
        });
    } while (inputGradeAgain.inputGrade === "y" || inputGradeAgain.inputGrade === "yes" || inputGradeAgain.inputGrade === "Y" || inputGradeAgain.inputGrade === "Yes" || inputGradeAgain.inputGrade === "YES");
}
evaluateGradeAgain();
