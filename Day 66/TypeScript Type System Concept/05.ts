// INTERSECTION TYPE

type Son = {
  name: string;
  fatherName: string;
  age: number;
  isMarried?: boolean;
};

type Father = {
  noOfChildren: number;
  childrenName: string[];
};

type Person = Son & Father;

const person: Person = {
  name: "Alice",
  fatherName: "John",
  age: 25,
  isMarried: true,
  noOfChildren: 2,
  childrenName: ["Bob", "Rock"],
};
console.log(person);
