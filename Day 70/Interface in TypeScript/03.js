// REOPEN THE INTERFACE AND USE CASES
// Create an object 'myCar' that adheres to the merged 'vehicle' interface
const myCar = {
    make: "BWM",
    model: "1 series",
    year: 2016,
    displayDetails(message) {
        console.log(message);
        console.log(`make: ${myCar.make}, model: ${myCar.model}, year: ${myCar.year}`);
    },
    color: "red",
    isNCP: false,
};
myCar.displayDetails("detail of my car: ");
export {};
