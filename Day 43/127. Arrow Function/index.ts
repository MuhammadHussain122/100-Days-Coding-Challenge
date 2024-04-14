/*
Convert a traditional function expression to an arrow function.
*/

let traditionalfunction = function (num: number) {
  return num;
};
console.log(traditionalfunction(1));

let arrowFunction = (num: number) => num;
console.log(arrowFunction(3));

// Note: arrow function is a short form of traditional function expression.