/* Converting to Upper and Lower Case:
Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
*/

function stringConvertCases(String: string){
   let lowerCase: string = String.toLocaleLowerCase();
   let upperCase: string = String.toLocaleUpperCase();
   console.log(`lower case of ${String} : ${lowerCase}`);
   console.log(`upper case of ${String} : ${upperCase}`);
}
stringConvertCases("May God bless you!");