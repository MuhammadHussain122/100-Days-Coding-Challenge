/* Refactoring to Arrow Functions: 
Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, 
making your code cleaner and more readable.
*/

function  rectangleArea(length: number, width: number):number{
    return length * width;
};
// Refactored into an arrow function
let rectangleAreaArrow= (length: number, width: number, area?: number): number => length * width;
console.log(rectangleAreaArrow(6,4));