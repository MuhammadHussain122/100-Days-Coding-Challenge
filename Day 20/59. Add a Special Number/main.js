/* Add a Special Number:
Make a program that creates custom address. These addresses can add a specific number to any other number
you give them later.

Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it.
This program makes that magic box for you!
*/
function createAdders(value) {
    return function (number) {
        return number + value;
    };
}
var addNumber = createAdders(20);
console.log(addNumber(6));
