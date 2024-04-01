"use strict";
/* Rounding to the Nearest Integer:
Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function roundOffToNearestInteger(decimalNum) {
    console.log(`Nearest integer to decimal number ${decimalNum}:`);
    return Math.round(decimalNum);
}
console.log(roundOffToNearestInteger(3.4));
console.log(roundOffToNearestInteger(3.7));
console.log(roundOffToNearestInteger(3.5));
