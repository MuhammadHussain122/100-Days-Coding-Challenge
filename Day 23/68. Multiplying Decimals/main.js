"use strict";
/* Multiplying Decimals:
Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function decimalNumbers(number1, number2) {
    let product = number1 * number2;
    return product.toFixed(2);
}
console.log(decimalNumbers(4.54, 7.623));
