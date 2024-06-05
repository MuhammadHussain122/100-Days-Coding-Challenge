// TYPE ASSERTIONS

// Example 1
let value: any = 4;
console.log(`${value as number} is a number`);
// Example 2
let someValue: unknown = "Hi!";
console.log(`${someValue as string} is a string`);