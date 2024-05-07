// Type annotations with Objects:
// Example 1
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
