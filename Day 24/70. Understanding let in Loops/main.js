/* Understanding let in Loops:
Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
Explain how the let keyword affects the visibility of the loop variable.
*/
function numbers1_5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
numbers1_5();
export {};
/* Declaring a variable with let keyword makes the variable a Local variable i.e., let keyword limits the scope of
variable to block level and the variable cannot be accessed outside that block.
*/
