// GENERICS INTRO
// A generic function 
function getValue(argument) {
    return argument;
}
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
const strng = getValue("Generics Intro");
const num = getValue(3);
const booln = getValue(true);
const union = getValue("blue");
const literal1 = getValue(4);
const literal2 = getValue(true);
console.log(strng);
console.log(num);
console.log(booln);
console.log(union);
console.log(literal1);
console.log(literal2);
export {};
