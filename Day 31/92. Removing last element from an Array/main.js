/* Remove the last element from an array:
Write a function to remove the last element from an array and return the removed element.
*/
function removingLastElement(Array) {
    let removedElement = Array.pop();
    return `Last element removed: ${removedElement}`;
}
console.log(removingLastElement([10, 20, 30, 40]));
export {};
