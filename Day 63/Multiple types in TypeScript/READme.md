TypeScript Types: 
TypeScript extends JavaScript's built-in types (numbers, strings, booleans, null, undefined, and objects) by introducing new types like "any", "unknown", "never, 
"enum", and "tuple".

- Type Annotations: In TypeScript, type annotations are used to explicitly specify the type of a variable, function, or any other entity in your code. 
  This helps the TypeScript compiler understand and enforce the types you intend to use in your program.

- Dynamic Type Determination: If you don't use type annotations in TypeScript, the language can still infer the type dynamically based on your declaration. 
  However, it's generally not recommended to rely solely on dynamic type inference.

- Any Type: The "any" type in TypeScript can represent any type of value. When a variable is assigned the "any" type, it tells the TypeScript compiler to disable 
  type checking for that variable. However, it's generally advised to avoid using the "any" type whenever possible in TypeScript due to reasons such as loss of 
  type safety, reduced code reliability, maintenance challenges, and interference with tooling. 