"use strict";
/* Checking if a Value is NaN:
Demonstrate how to check if a number is NaN(Not a Number) and return a boolean result.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function checkValueNaN(str) {
    return isNaN(str);
}
console.log(checkValueNaN("Hellow"));
console.log(checkValueNaN(""));
console.log(checkValueNaN("123"));
console.log(checkValueNaN(123));
