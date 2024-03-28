/* Function Expression vs. Function Declaration:
Compare function expression and declarations by creating one of each that performs the same task, such as squaring a 
number.
*/

// function declaration for finding power of a number
function powerDeclaration(number1: number) {
  return Math.pow(number1, 2);
}

// function expression for finding power of a number
const powerExpression = function (number1: number) {
  return Math.pow(number1, 2);
};

// Using both functions to find the power of number 5
console.log(powerDeclaration(5));
console.log(powerExpression(5));
