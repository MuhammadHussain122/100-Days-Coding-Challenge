"use strict";
/* length of each word from an array:
Use the .map() method to create a new array that contains the length of each word from an array of words.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let arrayOfWords = ["Ali", "Ahmed", "Waqar", "Liaqat", "Tahir"];
let arrayOflengthofWords = arrayOfWords.map((word) => word.length);
console.log(arrayOflengthofWords);
