// Tuple Data Type In TypeScript:
// Example 1
var tuple1 = ["boolean", 1, true];
// Reassign similar values in same order.
tuple1 = ["boolean", 0, false];
// Add Additional values
tuple1.push(100);
// Access individual elements
var element1 = tuple1[0], element2 = tuple1[1], element3 = tuple1[2];
console.log("tuple1 Elements:");
console.log(element1);
console.log(element2);
console.log(element3);
console.log(tuple1);
// Example 2
var tuple2 = [0, false, "boolean"];
// Reassign similar values in same order.
tuple2 = [1, true, "hello"];
// Can't add Additional values
// tuple2.push(10); // Error
// Access individual elements
var elmnt1 = tuple2[0], elmnt2 = tuple2[1], elmnt3 = tuple2[2];
console.log("tuple2 Elements:");
console.log(elmnt1);
console.log(elmnt2);
console.log(elmnt3);
