// REOPEN THE INTERFACE AND USE CASES
// Create an object 'myCar' that adheres to the merged 'vehicle' interface
var hisCar = {
    make: "BWM",
    model: "1 series",
    year: 2016,
    displayDetails: function (message) {
        console.log(message);
        console.log("make: ".concat(yourCar.make, ", model: ").concat(yourCar.model, ", year: ").concat(yourCar.year));
    },
    color: "red",
    isNCP: false,
};
hisCar.displayDetails("His car details: ");
