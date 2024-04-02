"use strict";
/* Find the Index of an element:
Find the index of "Orange" in an array of fruits and replace it with "Apricot".
*/
Object.defineProperty(exports, "__esModule", { value: true });
let arrayOfFruits = [
    "Cherry",
    "Mango",
    "Orange",
    "Apple",
    "Banana",
];
console.log(`Original Array: ${arrayOfFruits}`);
console.log(`Index of Orange: ${arrayOfFruits.indexOf("Orange")}`);
arrayOfFruits.splice(2, 1, "Apricot");
console.log(`Updated Array: ${arrayOfFruits}`);
