/* Sum of all elements of an array:
Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/

function arrayElements(numbers: number[]) {
  return numbers.reduce((previous, current) => previous + current, 0);
};
const numbers: number[] = [2, 4, 6, 8, 10, 12];
console.log(`Sum of all elements of the array: ${arrayElements(numbers)}`);
