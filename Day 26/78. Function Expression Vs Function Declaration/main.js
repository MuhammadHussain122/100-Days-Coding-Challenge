"use strict";
/* Function Expression vs. Function Declaration:
Compare function expression and declarations by creating one of each that performs the same task, such as squaring a
number.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// function declaration for finding power of a number
function powerDeclaration(number1) {
    return Math.pow(number1, 2);
}
// function expression for finding power of a number
const powerExpression = function (number1) {
    return Math.pow(number1, 2);
};
// Using both functions to find the power of number 5
console.log(powerDeclaration(5));
console.log(powerExpression(5));
