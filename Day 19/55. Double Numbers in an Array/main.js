/* Double Numbers in an Array:
Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

Explain & TIP:
We can use a special tool to go through each number in our list and make a new list with each number doubled.
*/
var numbers = [0, 1, 2, 3, 4, 5, 6, 7];
var doubledNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubledNumbers);
