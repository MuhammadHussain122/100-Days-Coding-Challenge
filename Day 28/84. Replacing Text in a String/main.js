"use strict";
/* Replacing Text in a String:
Write a function that takes a sentence and replaces all instances of the "JavaScript" with "TypeScript".
*/
Object.defineProperty(exports, "__esModule", { value: true });
function stringReplacement(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(stringReplacement("We are learning JavaScript and JavaScript is very interesting."));
