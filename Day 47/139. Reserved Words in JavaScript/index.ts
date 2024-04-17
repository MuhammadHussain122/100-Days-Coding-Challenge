/*
List three reserved words in JavaScript and create a valid use case for each.
*/

// let               // let is a reserved word used to a block-scoped local variable.
// function         // function is a reserved word used to declare a Function
// class           // class is a reserved word used to declare a Class.

let num: number = 3;
console.log(num);
function Addition(num1: number, num2: number) {
  return num1 + num2;
}
console.log(Addition(4, 5));
class Subtraction {
  subtract(num1: number, num2: number) {
    return num1 + num2;
  }
}

let Subtract = new Subtraction();
console.log(Subtract.subtract(2, 6));

