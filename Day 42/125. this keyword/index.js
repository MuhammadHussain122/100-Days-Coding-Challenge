/*
Modify a method in an object to use the this keyword to access another property in the same object.
*/
import chalk from "chalk";
import inquirer from "inquirer";
async function calculateAreaOfCircle() {
    let inputRadius = await inquirer.prompt({
        name: "input",
        message: "enter the radius of the circle",
        type: "number",
    });
    const circle = {
        PI: 3.14,
        calculateArea: function () {
            console.log(chalk.green(`area of a circle whose radius is ${inputRadius.input}:`));
            return chalk.yellow(this.PI * (inputRadius.input * inputRadius.input));
        },
    };
    console.log(circle.calculateArea());
}
async function calculateAreaOfCircleAgain() {
    do {
        await calculateAreaOfCircle();
        var inputRadiusAgain = await inquirer.prompt({
            name: "inputAgain",
            message: "Do you want to calculate area once more? y/n",
            type: "input",
        });
    } while (inputRadiusAgain.inputAgain === "Y" || inputRadiusAgain.inputAgain === "y" || inputRadiusAgain.inputAgain === "Yes" || inputRadiusAgain.inputAgain === "yes" || inputRadiusAgain.inputAgain === "YES");
}
calculateAreaOfCircleAgain();
