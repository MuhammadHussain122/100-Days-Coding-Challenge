// LITERAL TYPES

let state: "sitting" | "standing" | "walking" | "Running";
console.log(state = "sitting");
console.log(state = "standing");
console.log(state = "walking");
console.log(state = "Running");

// Any value other than "sitting", "standing", "walking" or "Running" cannot be assignable and if assigned causes error.
// console.log(state = "Sleeping");

function setvalue(value: 1 | 3 | 0) {
  return value;
}
console.log(setvalue(0));
console.log(setvalue(1));
console.log(setvalue(3));

// Any value other than "0", "1", or "3" causes error.
// console.log(setvalue(2));
