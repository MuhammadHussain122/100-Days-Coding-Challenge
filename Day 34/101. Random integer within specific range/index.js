"use strict";
/* Random integer within specific range:
Generate a random integer between 1 and 10.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function randomIntegerBetween1And10() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(randomIntegerBetween1And10());
