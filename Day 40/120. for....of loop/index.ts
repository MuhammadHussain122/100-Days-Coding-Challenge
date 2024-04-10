/*
Use a for...of loop to iterate through an array of your favorite movies and log each one.
*/
import chalk from "chalk";
let favorite_movies: string[]= [
    "12 Fail",
    "Salaar",
    "The Prestige",
  "Three Idiots",
  "Taray Zameen Par",
  
]
console.log(chalk.gray("My favorite movies:"))
for(const element of favorite_movies){
    console.log(chalk.green(element));
}