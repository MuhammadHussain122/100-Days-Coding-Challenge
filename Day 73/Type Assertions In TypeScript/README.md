Type assertions in TypeScript are a way to tell the TypeScript compiler that you are certain about the type of a variable. It's like type casting in other languages, but it doesn't perform any special checking or restructuring of data. It has no runtime impact and is used purely by the compiler.

Example 1:

```TypeScript
let value: any = 4;
console.log(`${value as number} is a number`);
```

In this example, `value` is of type `any`, but we know it's a number. So, we can use type assertion to treat `value` as a number.

Example 2:

```TypeScript
let someValue: unknown = "Hi!";
console.log(`${someValue as string} is a string`);
```

In this case, `someValue` is of type `unknown` which is a more restrictive version of `any`.  By using type assertion 
`(someValue as string)`, we tell TypeScript to trust us that `someValue` is a string.

Remember, type assertions should be used carefully. Incorrectly asserting an incompatible type can lead to bugs that TypeScript won't be able to catch. It's a powerful tool, but with great power comes great responsibility!
