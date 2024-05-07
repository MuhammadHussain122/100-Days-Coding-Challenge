Type annotations with Objects:
In TypeScript, type annotations with objects are used to specify the structure of an object by defining the types of its 
properties. For example, an object "user" can be defined as having a "name" of type "string" and an "age" of type "number". 
Optional properties can be denoted with a "?" after the property name. Methods in objects can also have type annotations, 
specifying the types of their parameters and return values. These annotations help ensure that objects have the correct 
structure and behavior.

/// Example 1
let user: { userName: string; password: any; gender: string } = {
  userName: "Hussain",
  password: "How@are_you@154",
  gender: "male",
};
console.log(user);

// Example 2
let employee: { name: string; age?: number } = {
  name: "Qamar",
};
console.log(employee);

// Example 3
let greeter: {
  name: string;
  greet: (msg: string) => void;
};
greeter = {
  name: "Ali",
  greet(msg: string) {
    console.log(`${this.name} says: ${msg}`);
  },
};
console.log(greeter);