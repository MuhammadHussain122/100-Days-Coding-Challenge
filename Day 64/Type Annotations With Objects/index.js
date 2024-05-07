// Example 1
let user = {
    userName: "Hussain",
    password: "How@are_you@154",
    gender: "male",
};
console.log(user);
console.log(user.userName);
// Example 2
let employee = {
    name: "Qamar",
};
console.log(employee);
console.log(employee.name);
// Example 3
let greeter;
greeter = {
    name: "Ali",
    greet(msg) {
        console.log(`${this.name} says: ${msg}`);
    },
};
console.log(greeter);
console.log(greeter.name);
export {};
