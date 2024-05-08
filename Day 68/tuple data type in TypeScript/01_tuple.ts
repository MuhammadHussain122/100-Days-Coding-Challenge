// Tuple Data Type In TypeScript:

// Example 1
let tuple1: [string, number, boolean] = ["boolean", 1, true];
// Reassign similar values in same order.
tuple1 = ["boolean", 0, false];
// Add Additional values
tuple1.push("j");
// Access individual elements
const [element1, element2, element3] = tuple1;
console.log("tuple1 Elements:");
console.log(element1);
console.log(element2);
console.log(element3);
console.log(tuple1);

// Example 2
let tuple2: readonly [number, boolean, string] = [0, false, "boolean"];
// Reassign similar values in same order.
tuple2 = [1, true, "hello"];
// Can't add Additional values
// tuple2.push(10); // Error
// Access individual elements
const [elmnt1, elmnt2, elmnt3] = tuple2;
console.log("tuple2 Elements:");
console.log(elmnt1);
console.log(elmnt2);
console.log(elmnt3);
console.log(tuple1);
