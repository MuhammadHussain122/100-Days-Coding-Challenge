/*
Create a function inside an object that returns the object's own name property using the this keyword.
*/
import chalk from "chalk";
let student={
name: "Hussain",

getName: function(){
return this.name;
}
}
console.log(chalk.green(student.getName()));


