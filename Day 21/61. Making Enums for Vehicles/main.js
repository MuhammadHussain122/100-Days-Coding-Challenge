/* Making Enums for Vehicles:
Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

Explain & TIP: Enums are like special lists in your code that help you categorize things.
They make your code cleaner and easier to understand.
*/
var vehiclesType;
(function (vehiclesType) {
    vehiclesType[vehiclesType["cycle"] = 0] = "cycle";
    vehiclesType[vehiclesType["bus"] = 1] = "bus";
    vehiclesType[vehiclesType["van"] = 2] = "van";
    vehiclesType[vehiclesType["jeep"] = 3] = "jeep";
})(vehiclesType || (vehiclesType = {}));
console.log(vehiclesType.cycle); // 0
console.log(vehiclesType.bus);
export {};
// note: enum starts from 0.
