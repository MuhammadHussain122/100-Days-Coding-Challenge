// REOPEN THE INTERFACE AND USE CASES

// vehicle Interface Declaration
interface vehicle {
  make: string;
  model: string;
  year: number;
  displayDetails(message: string): void;
}

// Interface Reopening
interface vehicle {
  color: string;
}

// Interface Reopening
interface vehicle {
  isNCP?: boolean;
}

// Create an object 'myCar' that adheres to the merged 'vehicle' interface
const myCar: vehicle = {
  make: "BWM",
  model: "1 series",
  year: 2016,
  displayDetails(message: string) {
    console.log(message);
    console.log(`make: ${myCar.make}, model: ${myCar.model}, year: ${myCar.year}`);
    
  },
  color: "red",
  isNCP: false,
};
myCar.displayDetails("detail of my car: ");
