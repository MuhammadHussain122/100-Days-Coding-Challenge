"use strict";
/* Random hexadecimal number:
Create a function that generates a random hexadecimal color code.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function randomHexColor() {
    const color = "#" +
        Math.floor(Math.random() * 0xffffff)
            .toString(10)
            .padStart(6, "0");
    return color;
}
console.log(randomHexColor());
