/*
Convert a traditional function expression to an arrow function.
*/
let traditionalfunction = function (num) {
    return num;
};
console.log(traditionalfunction(1));
let arrowFunction = (num) => num;
console.log(arrowFunction(3));
export {};
// Note: arrow function is a short form of traditional function expression.
