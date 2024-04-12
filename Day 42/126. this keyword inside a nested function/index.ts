/*
Explain how the this keyword changes its value when used inside a nested function within a method.
*/
import chalk from "chalk";
let person = {
  name: "Ali",
  id: "1543",
  getId: function () {
    let thisKeyword = this;
    function getPersonID() {
      return thisKeyword.id;
    }
    console.log(chalk.green("Person's ID:"));
    return chalk.yellow(getPersonID());
  },
};
console.log(person.getId());
