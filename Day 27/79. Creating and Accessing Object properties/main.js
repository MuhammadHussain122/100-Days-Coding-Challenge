"use strict";
/* creating and Accessing Object Properties:
Construct an object representing a car with properties for for make, model, and year. Then, show how you can access
the model property of the car.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    make: "BMW",
    model: "BMW 3 Series",
    year: "2019"
};
console.log("Properties of car object");
console.log(`make: ${car.make}`);
console.log(`model: ${car.model}`);
console.log(`year: ${car.year}`);
// Note: to access the properties of an object we use dote notation.