/* More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:

• Tests for equality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than 
or equal to

• Tests using "and" and "or" operators

• Test whether an item is in an array

• Test whether an item is not in an array
*/

// Tests for equality with strings
console.log("Testing for equality with strings.");
console.log("Ali"== "Ali"); //True

//Tests using the lower case function
console.log("Tests using the lower case function.")
console.log("Hussain".toLowerCase()== "hussain"); // true

/*Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to */
console.log("Numerical tests.")
console.log(3 > 1); // true
console.log(1 > 3); // false

//Tests using "and" and "or" operators
console.log('Tests using "and" and "or" operators.')
console.log(true&&true); // True
console.log(true&&false); // False
console.log(true||false); // True

// Test whether an item is in an array
console.log("Test whether an item is in an array.")
let arrItems= [1, 2, 3, 4, 5, 6]
console.log("Is '2' present in the arrItems?")
console.log(arrItems.includes(1)); // True

// Test whether an item is not in an array
console.log("Test whether an item is not in an array.")
console.log("Is '8' not present in the array?")
console.log(!arrItems.includes(8)); // True






