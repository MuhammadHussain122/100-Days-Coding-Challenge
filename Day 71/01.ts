// Class Type Annotations
// Used to specify types of properties, methods, and constructor parameters in a class, ensuring type safety.
class Product {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

/* Differences between constructors and methods of a class in TypeScript:

Constructor:
- Created / defined automatically when we create a class or we can create it explicitly.
- The constructor is a special method invoked/called automatically when an instance/object of the class is created using the new keyword.
- It initializes the newly created object with initial values or performs any setup required before the object can be used.
- There can be only one constructor per class, and it cannot have a return type.
- It typically sets initial values to the instance properties or performs other initialization tasks.
- Constructors can accept parameters to customize the initialization of instances.
- The constructor is defined using the constructor keyword followed by a parameter list and optional method body.
Method:
- A method is a function defined within a class that performs some action or computes some result.
- Methods are invoked / called explicitly by the code that uses the class instance.
- Unlike the constructor, there can be multiple methods within a class, each serving a specific purpose.
- Methods can have return types specifying the type of value they return, or they can have a void return type if they don't return anything.
- Methods can accept parameters to perform actions based on the provided inputs.
- Methods are defined using the regular function syntax within the class body, optionally with a return type and parameter list.
*/
