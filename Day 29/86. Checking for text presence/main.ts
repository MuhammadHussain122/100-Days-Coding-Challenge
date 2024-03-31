/* Checking For Text Presence:
Create a function that checks if the word "TypeScript" is present in a given string. It should return true if found, 
otherwise false.
*/

function textPresence(str: string){
 return str.includes("TypeScript");
}
console.log(textPresence("TypeScript is a superset of JavaScript"));
console.log(textPresence("Python"));