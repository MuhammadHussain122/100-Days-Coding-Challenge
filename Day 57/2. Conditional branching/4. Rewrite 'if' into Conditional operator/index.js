/* Rewrite this if using the conditional operator '?':

let result;

if (a + b < 10) {
  result = 'the result of a + b is less than 10 ';
} else {
  result = 'the result of a + b is greater than 10';
}
*/

// Rewritten using conditional operator.

let result = (a + b < 10) ? 'the result of a + b is less than 10' : 'the result of a + b is greater than 10';
