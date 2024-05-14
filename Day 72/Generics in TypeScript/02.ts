//  GENERICS MULTIPLE TYPES

// Generic Function 'SingleType'
function getSingleTypeValue<T>(val: T): T {
  return val;
}
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
console.log(getSingleTypeValue<string>("SingleType:"));
console.log(getSingleTypeValue<number>(3));
console.log(getSingleTypeValue<boolean>(true));
console.log(getSingleTypeValue<"blue" | "red" | "green">("blue"));
console.log(getSingleTypeValue<4>(4));

// Arrow Function with Generics `SingleTypeArrowFunction`
const SingleTypeArrowFunc = <T>(val: T): T => val;
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
console.log(SingleTypeArrowFunc<string>("SingleTypeArrowFunction:"));
console.log(SingleTypeArrowFunc<number>(4));
console.log(SingleTypeArrowFunc<boolean>(true));
console.log(SingleTypeArrowFunc<"blue" | "red" | "green">("blue"));
console.log(SingleTypeArrowFunc<4>(4));

// Generic Function `testType`
function testType<T>(val: T): string {
  return `The Value Is ${val} And Type Is ${typeof val}`;
}
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
console.log("Testing Type:");
console.log(testType<string>("marks"));
console.log(testType<number>(100));
console.log(testType<"1" | 1>(1));

// Generic Function `multipleTypes`
function getMultipleTypeValues<T, S>(valueOne: T, valueTwo: S): string {
  return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
// 'T' and 'S' are placeholder types. When you call this function, you can replace `T` and 'S' with any types, like `number`, `string`, etc.
console.log("multipleTypes:");
console.log(getMultipleTypeValues<string, number>("12", 12));
console.log(getMultipleTypeValues<number, boolean>(10, true));
console.log(getMultipleTypeValues<boolean, boolean>(false, true));
console.log(getMultipleTypeValues<number, number>(60, 20));
console.log(
  getMultipleTypeValues<"red" | "green" | "blue", "on" | "off">("red", "off")
);
