/* Random hexadecimal number:
Create a function that generates a random hexadecimal color code.
*/

function randomHexColor(): string {
  const color =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(10)
      .padStart(6, "0");
  return color;
}

console.log(randomHexColor());
