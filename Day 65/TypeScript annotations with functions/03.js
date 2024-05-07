// FUNCTION REST PARAMETER /
// Function with a rest parameter and type annotations
function cancatenateAll() {
    var string = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        string[_i] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < string.length; i++) {
        result += string[i];
    }
    return result;
}
// Calling the function with various numeric arguments
console.log(cancatenateAll("cancatenated", "10", "20", "30")); // Output: "cancatenated102030"
