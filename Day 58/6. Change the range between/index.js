/* Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
*/

let age = prompt("Enter your age:", "");
if(age >= 14 && age <=90){
    alert("Your age is between 14 and 90 inclusively");
}
else{
    alert("Your age is not between 14 and 90");
}