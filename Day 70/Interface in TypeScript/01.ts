// INTERFACE INTRO:
interface vehicle {
  make: string;
  model: string;
  year: number;
}

const myCar: vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

const yourCar: vehicle = {
  make: "BWM",
  model: "1 series",
  year: 2016,
};
console.log(myCar.make);
console.log(yourCar.make);
