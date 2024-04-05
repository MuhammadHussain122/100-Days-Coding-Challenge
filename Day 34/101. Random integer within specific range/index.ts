/* Random integer within specific range:
Generate a random integer between 1 and 10.
*/

function randomIntegerBetween1And10(): number {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(randomIntegerBetween1And10());
