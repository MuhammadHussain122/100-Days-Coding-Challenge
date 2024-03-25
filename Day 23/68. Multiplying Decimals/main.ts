/* Multiplying Decimals: 
Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

*/

function decimalNumbers(number1: number, number2: number) {
  let product = number1 * number2;
  return product.toFixed(2);
}

console.log(decimalNumbers(4.54, 7.623));
