"use strict";
/* Arithmetic with Mixed Types:
Write a function that takes two parameters: a number and a string that represents a number (e.g., "5").
Return their sum as a number.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function numberStringSum(number1, String) {
    return number1 + Number(String);
}
console.log(numberStringSum(6, "12"));
