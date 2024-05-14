// GENERICS CLASSES 

// Generic Class `User`
class Student<T = string> {
    constructor(public value: T) {}
  
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(percentage: T): void {
      console.log(`${percentage} - ${this.value}%`);
    }
  }

// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
  
  // Creating an instance / object of `User` with a specific type parameter (string)
  let studentOne = new Student<string>("85");
  studentOne.value; 
  console.log("studentOne:")
  studentOne.show("Percentage"); 
  
// Creating an instance / object of `User` with a type parameter that can be a number or a string
  let studentTwo = new Student<number | string | boolean>(90);
  studentTwo.value; 
  console.log("studentTwo:")
  studentTwo.show("Percentage"); 
  
