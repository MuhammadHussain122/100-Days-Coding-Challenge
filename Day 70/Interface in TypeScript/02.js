// INTERFACE METHOD AND PARAMETERS
var myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    displayDetails: function (message) {
        console.log(message);
        console.log("make: ".concat(myCar.make, ", model: ").concat(myCar.model, ", year: ").concat(myCar.year));
    },
};
var yourCar = {
    make: "BWM",
    model: "1 series",
    year: 2016,
    displayDetails: function (message) {
        console.log(message);
        console.log("make: ".concat(yourCar.make, ", model: ").concat(yourCar.model, ", year: ").concat(yourCar.year));
    },
};
myCar.displayDetails("Here is the detail of my car: ");
yourCar.displayDetails("Here is the detail of your car: ");
