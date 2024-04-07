/* Swapping Variables:
Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so
that a becomes 10 and b becomes 5.
*/
function swapVariablesValues() {
    let x = 20;
    let y = 30;
    console.log(`Before swapping: \n x = ${x}, y = ${y}`);
    let z = x;
    x = y;
    y = z;
    console.log(`After swapping: \n x = ${x}, y = ${y}`);
}
swapVariablesValues();
export {};
