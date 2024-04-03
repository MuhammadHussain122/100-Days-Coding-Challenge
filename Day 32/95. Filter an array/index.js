"use strict";
/* Filter an array:
Write a function that uses the .filter() method to return an array of numbers greater than 10.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function numbersGreaterThan10(nums) {
    return nums.filter((num) => num > 10);
}
console.log(numbersGreaterThan10([1, 2, 3, 4, 5, 9, 11, 13, 35, 78, 99, 123]));
