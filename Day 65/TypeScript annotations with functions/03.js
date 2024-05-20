// FUNCTION REST PARAMETER /
// Function with a rest parameter and type annotations
function cancatenateAll(...string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result += string[i];
    }
    return result;
}
// Calling the function with various numeric arguments
console.log(cancatenateAll("cancatenated", "10", "20", "30")); // Output: "cancatenated102030"
export {};
