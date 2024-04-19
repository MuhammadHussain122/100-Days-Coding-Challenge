/*
Show an example of callback function used to filter an array of numbers.
*/
const arrayOfNumbers = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32];
const filteredNumbers = arrayOfNumbers.filter((number) => number > 20); /* ()=> is used as
callback function in filter function/method.*/
console.log(filteredNumbers);
export {};
