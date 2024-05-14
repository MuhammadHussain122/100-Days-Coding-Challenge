// GENERICS INTRO
// A generic function 
function getValue(argument) {
    return argument;
}
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
var strng = getValue("Generics Intro");
var num = getValue(3);
var booln = getValue(true);
var union = getValue("blue");
var literal1 = getValue(4);
var literal2 = getValue(true);
console.log(strng);
console.log(num);
console.log(booln);
console.log(union);
console.log(literal1);
console.log(literal2);
