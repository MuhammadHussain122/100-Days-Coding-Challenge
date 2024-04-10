/*
Create a Map that stores the names of countries as keys and their capitals as values. 
Add atleast three countries to the Map.
*/

import chalk from "chalk";

const countriesAndTheirCapitals = new Map();
countriesAndTheirCapitals.set("Pakistan", "Islamabad");
countriesAndTheirCapitals.set("India", "New Delhi");
countriesAndTheirCapitals.set("China", "Beijing");
countriesAndTheirCapitals.set("Canada", "Ottawa");
console.log(chalk.green("countries and their capitals"));

console.log(countriesAndTheirCapitals);
