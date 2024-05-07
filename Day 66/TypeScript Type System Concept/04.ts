// TYPE ALIAS

type StudentName = string;

let stdName: StudentName = "Tanzeel";

type StdNameOrRollNo = string | number;

let stdRollNo: StdNameOrRollNo = 30;

// another example
type User = {
  name: string;
  age: number;
  email?: string;
};

const user1: User = {
  name: "Ali",
  age: 21,
  email: "Ali@example.com",
};

const user2: User = {
  name: "Asghar",
  age: 22,
};

console.log(user1);
console.log(user2);
