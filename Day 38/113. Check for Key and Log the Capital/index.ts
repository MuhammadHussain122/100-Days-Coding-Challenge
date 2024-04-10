/*
 Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
*/
import chalk from "chalk";
const countriesAndTheirCapitals = new Map();
countriesAndTheirCapitals.set("Pakistan", "Islamabad");
countriesAndTheirCapitals.set("India", "New Delhi");
countriesAndTheirCapitals.set("China", "Beijing");
countriesAndTheirCapitals.set("Canada", "Ottawa");
console.log(chalk.green("countries and their capitals:"));
console.log(countriesAndTheirCapitals);
console.log(chalk.green(`Is Canada present in the Map: ${countriesAndTheirCapitals.has("Canada")}`));
console.log(chalk.green(`The capital of Canada: ${countriesAndTheirCapitals.get("Canada")}`));