/*
Create two modules; one that exports a class, and another that imports the class and creates an instance.
*/
import chalk from "chalk";
export class Game {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(chalk.green(`My Favourite Game is ${this.name}`));
    }
}
// let favGame = new Game("Cricket");
// favGame.greet();
