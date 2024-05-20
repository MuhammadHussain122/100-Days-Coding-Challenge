// INTERFACE VS. TYPE ALIASES 
// Both are used to create custom structures and types which can be shared.
class Labrador {
    type = "dog";
    bark() {
        console.log("Woof!");
    }
}
const labrador = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};
const myCar = {
    brand: "Toyota",
    model: "Camry",
};
export {};
