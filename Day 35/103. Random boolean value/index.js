"use strict";
/* Random boolean value:
Write a function that returns a random boolean value, true or false.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function randomBooleanValue() {
    return Math.random() > 0.5;
}
console.log(randomBooleanValue());
// function randomBooleanValue(): boolean {
//     return Math.random()> 0.5
// //   let value = Math.random();
// //   console.log(value);
// //   if (value > 0.5) {
// //     console.log(true);
// //   } else if (value < 0.5) {
// //     console.log(false);
// //   }
// }
// console.log(randomBooleanValue());
