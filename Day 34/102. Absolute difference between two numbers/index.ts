/* Absolute difference between two numbers:
Calculate and log the absolute difference between two numbers.
*/

function absoluteDiff(num1: number, num2: number){
    let difference = Math.abs(num1 - num2);
    console.log(`Absolute difference between ${num1} and ${num2}:`)
    return difference;
}
console.log(absoluteDiff(-12, 12));