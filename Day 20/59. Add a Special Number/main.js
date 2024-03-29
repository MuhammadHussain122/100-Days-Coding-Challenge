"use strict";
/* Add a Special Number:
Make a program that creates custom adders. These addresses can add a specific number to any other number
you give them later.

Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it.
This program makes that magic box for you!
*/
Object.defineProperty(exports, "__esModule", { value: true });
function createAdders(value) {
    return function (number) {
        return number + value;
    };
}
let addNumber = createAdders(20);
console.log(addNumber(6));
