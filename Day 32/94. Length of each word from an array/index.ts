/* length of each word from an array:
Use the .map() method to create a new array that contains the length of each word from an array of words.
*/

let arrayOfWords: string[] = ["Ali", "Ahmed", "Waqar", "Liaqat", "Tahir"];
let arrayOflengthofWords: number[] = arrayOfWords.map((word) => word.length);

console.log(arrayOflengthofWords);
