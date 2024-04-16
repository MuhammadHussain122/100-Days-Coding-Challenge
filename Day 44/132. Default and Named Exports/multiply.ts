/*
 Discuss the difference between default and named exports in JavaScript modules.
*/
import chalk from "chalk";
export default class Multiply {
    num1: number; 
    num2: number;
    constructor(num1: number, num2: number){
        this.num1= num1;
        this.num2 = num2;
    }
    multiply(){
        console.log(chalk.green("default export"));
        console.log(this.num1 * this.num2);
    }
}


