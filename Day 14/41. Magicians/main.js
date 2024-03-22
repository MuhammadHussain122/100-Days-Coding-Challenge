"use strict";
/* Magicians:
Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let magicians_name = ["Merry", "Jhon", "David", "Rohit", "Albert"];
function show_magicians(magicians_name) {
    magicians_name.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians_name);
