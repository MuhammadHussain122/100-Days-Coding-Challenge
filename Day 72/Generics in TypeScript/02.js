//  GENERICS MULTIPLE TYPES
// Generic Function 'SingleType'
function getSingleTypeValue(val) {
    return val;
}
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
console.log(getSingleTypeValue("SingleType:"));
console.log(getSingleTypeValue(3));
console.log(getSingleTypeValue(true));
console.log(getSingleTypeValue("blue"));
console.log(getSingleTypeValue(4));
// Arrow Function with Generics `SingleTypeArrowFunction`
const SingleTypeArrowFunc = (val) => val;
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
console.log(SingleTypeArrowFunc("SingleTypeArrowFunction:"));
console.log(SingleTypeArrowFunc(4));
console.log(SingleTypeArrowFunc(true));
console.log(SingleTypeArrowFunc("blue"));
console.log(SingleTypeArrowFunc(4));
// Generic Function `testType`
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
console.log("Testing Type:");
console.log(testType("marks"));
console.log(testType(100));
console.log(testType(1));
// Generic Function `multipleTypes`
function getMultipleTypeValues(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
// 'T' and 'S' are placeholder types. When you call this function, you can replace `T` and 'S' with any types, like `number`, `string`, etc.
console.log("multipleTypes:");
console.log(getMultipleTypeValues("12", 12));
console.log(getMultipleTypeValues(10, true));
console.log(getMultipleTypeValues(false, true));
console.log(getMultipleTypeValues(60, 20));
console.log(getMultipleTypeValues("red", "off"));
export {};
