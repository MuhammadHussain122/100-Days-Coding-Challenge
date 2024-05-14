// GENERICS INTRO

// A generic function 
function getValue<T>(argument: T): T {
  return argument;
}
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
const strng = getValue<string>("Generics Intro");
const num = getValue<number>(3);
const booln = getValue<boolean>(true);
const union = getValue<"blue" | "red" | "green">("blue");
const literal1 = getValue<4>(4);
const literal2 = getValue<true>(true);
console.log(strng);
console.log(num);
console.log(booln);
console.log(union);
console.log(literal1);
console.log(literal2);
