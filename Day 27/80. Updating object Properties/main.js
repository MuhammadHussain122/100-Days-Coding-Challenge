/* Updating Object Properties:
Add a property named color to the existing car object, and then update the year property to 2020.
Show how to perform these operation.
*/
//car object is created.
let car = {
    make: "BMW",
    model: "BMW 3 Series",
    year: "2019",
    color: "Black" // color property is added.
};
// the property year is updated to 2020.
car.year = "2020";
console.log("Updated properties of car object");
console.log(`make: ${car.make}`);
console.log(`model: ${car.model}`);
console.log(`year: ${car.year}`);
console.log(`color: ${car.color}`);
export {};
