// Type annotations with Objects:
// Example 1
let user = {
    userName: "Hussain",
    password: "How@are_you@154",
    gender: "male",
};
console.log(user);
// Example 2
let employee = {
    name: "Qamar",
};
console.log(employee);
// Example 3
let greeter;
greeter = {
    name: "Ali",
    greet(msg) {
        console.log(`${this.name} says: ${msg}`);
    },
};
console.log(greeter);
export {};
