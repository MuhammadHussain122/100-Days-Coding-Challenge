"use strict";
/*Square root of a number:
Use the JavaScript Math object to find the square root of 64.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function squareRoot(num) {
    console.log(`Square root of ${num}:`);
    return Math.sqrt(num);
}
console.log(squareRoot(64));
