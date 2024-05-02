/* Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and 
returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
*/

function pow(x, n){
    return Math.pow(x, n);
}
console.log(pow(2, 3));