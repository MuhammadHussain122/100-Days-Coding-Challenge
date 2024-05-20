// VOID & NEVER
// void
function voidKeyword(voidExplanation) {
    console.log(voidExplanation);
}
voidKeyword("In TypeScript, void is a special type that represents the absence of any type");
function noReturnValue() {
    // This function doesn't return a value (implicitly returns undefined).
}
noReturnValue();
// never
/* The 'never' type in TypeScript is a special type that signifies values that will never occur.
It's primarily used in two situations:
1. For functions that never return, either because they always throw an error or have an infinite loop.
2. In type narrowing, where variables are narrowed down by type guards that can never be true.
The 'never' type doesn't contain any values, so you can't assign any value to a 'never' variable.
It's also used in conditional types like 'NonNullable<T>' to exclude certain types, such as 'null' and 'undefined'.
*/
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}
export {};
