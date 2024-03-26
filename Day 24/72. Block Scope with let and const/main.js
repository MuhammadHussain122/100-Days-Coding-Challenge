"use strict";
/* Block Scope with let and const:
Demonstrate block scope by creating a code with {} that uses both let and connst.
Show how variables declared inside the block are not accessible outside of it.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function numbers() {
    let number1 = 3; // block scope variable
    const number2 = 4; // block scope variable
}
numbers();
console.log(number1); // you can not access block scope variable outside of block.
console.log(number2); // you can not access block scope variable outside of block.
