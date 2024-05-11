// INTERFACE METHOD AND PARAMETERS

interface vehicle {
  make: string;
  model: string;
  year: number;
  displayDetails(message: string): void;
}

const myCar: vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  displayDetails(message: string) {
    console.log(message);
    console.log(`make: ${myCar.make}, model: ${myCar.model}, year: ${myCar.year}`);
  },
};

const yourCar: vehicle = {
  make: "BWM",
  model: "1 series",
  year: 2016,
  displayDetails(message: string) {
    console.log(message);
    console.log(`make: ${yourCar.make}, model: ${yourCar.model}, year: ${yourCar.year}`);
  },
};
myCar.displayDetails("Here is the detail of my car: ");
yourCar.displayDetails("Here is the detail of your car: ");
