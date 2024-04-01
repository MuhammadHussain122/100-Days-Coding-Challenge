/* Checking if a Value is NaN:
Demonstrate how to check if a number is NaN(Not a Number) and return a boolean result.
*/

function checkValueNaN(str: any){
  return isNaN(str);
}
console.log(checkValueNaN("Hellow"));
console.log(checkValueNaN(""));
console.log(checkValueNaN("123"));
console.log(checkValueNaN(123));