"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Name Cases:
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
let studentName = "Muhammad Hussain";
console.log(studentName.toLocaleLowerCase());
console.log(studentName.toUpperCase());
console.log(studentName.charAt(0).toUpperCase() + studentName.slice(1).toLowerCase());
