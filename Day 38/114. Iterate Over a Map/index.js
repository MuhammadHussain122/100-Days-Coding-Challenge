/*
Iterate over a Map of student IDs and names, and log each pair to the console.
*/
import chalk from "chalk";
const studentNameAndID = new Map();
studentNameAndID.set("1", "Hussain");
studentNameAndID.set("2", "Qasim");
studentNameAndID.set("3", "Ali");
studentNameAndID.set("4", "Ahmed");
studentNameAndID.forEach((name, id) => {
    console.log(chalk.green(`name: ${name}, ID: ${id}`));
});
