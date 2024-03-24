/* Logical AND Verification:
Create a function that checks two boolean (true or false) values. It should only say true if both are true , 
using the && operator
*/

function checkValues(value1: boolean, value2: boolean){
   return value1 && value2;
}

console.log(checkValues(true, true));
console.log(checkValues(true, false));
console.log(checkValues(false, true));
console.log(checkValues(false, false));