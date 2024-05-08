// TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS
var logicalOperators = [
    true || true,
    true || false,
    true && true,
    true && true && false,
];
var logicalOperatorsExamples = [
    "Ali || Ahmed === Ali",
    "Ali || false === Ali",
    "Ali && Ahmed === Ahmed",
    "Ali && Ahmed && false === false",
];
var logicalOperatorsWithExamples = [
    "Boolean:",
    "true || true === ".concat(true || true),
    "true || false ===  ".concat(true || false),
    "true && true ===  ".concat(true && true),
    "true && true && false ===  ".concat(true && true && false),
    "Examples:",
    "Ali || Ahmed === ".concat("Ali" || "Ahmed"),
    "Ali || false === ".concat("Ali" || false),
    "Ali && Ahmed === ".concat("Ali" || "Ahmed"),
    "Ali && Ahmed && false === ".concat("Ali" && "Ahmed" && false)
];
console.log(logicalOperatorsWithExamples);
