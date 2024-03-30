/* Replacing Text in a String:
Write a function that takes a sentence and replaces all instances of the "JavaScript" with "TypeScript".
*/

function stringReplacement(sentence: string): string {
   return sentence.replace(/JavaScript/g,"TypeScript");
}
console.log(stringReplacement("We are learning JavaScript and JavaScript is very interesting."));