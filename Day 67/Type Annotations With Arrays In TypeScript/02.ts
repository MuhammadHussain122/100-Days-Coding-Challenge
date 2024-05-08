// TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS

let logicalOperators: boolean[] = [
  true || true,
  true || false,
  true && true,
  true && true && false,
];
let logicalOperatorsExamples: string[] = [
  "Ali || Ahmed === Ali",
  "Ali || false === Ali",
  "Ali && Ahmed === Ahmed",
  "Ali && Ahmed && false === false",
];
let logicalOperatorsWithExamples: (boolean | string)[] = [
  "Boolean:",
  `true || true === ${true || true}`,
  `true || false ===  ${true || false}`,
  `true && true ===  ${true && true}`,
  `true && true && false ===  ${true && true && false}`,
  "Examples:",
  `Ali || Ahmed === ${"Ali" || "Ahmed"}`,
  `Ali || false === ${"Ali"|| false}`,
  `Ali && Ahmed === ${"Ali"|| "Ahmed"}`,
  `Ali && Ahmed && false === ${"Ali" && "Ahmed" && false}`
];
console.log(logicalOperatorsWithExamples);
