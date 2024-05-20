## TypeScript Interfaces:

- The main purpose of creating an interface in TypeScript is to define the structure or shape of an object, specifying
  the properties and methods that an object must have.
- An interface is a structure that defines the contract / template / blueprint / agreement for classes to follow.
  Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It’s up to the class that implements this interface to provide the specific implementation.
  When a class implements an interface, it’s agreeing to follow the “contract” that the interface has defined.
- Interfaces enforce a specific structure on classes or objects, enhancing code reliability, predictability, and
  maintainability.
- They enable early detection of type-related errors, clarify code by documenting object expectations, and maintain
  uniformity across class implementations.
- Methods within interfaces define expected function behaviors, including argument and return types.
- Interfaces can be expanded over time, allowing for flexible and organized code growth.
- TypeScript includes predefined interfaces for standard objects, like HTML elements, to ensure consistent interaction
  with web APIs.
- The 'HTMLImageElement' interface is specifically for '<img>' elements, detailing their properties and behaviors.

## Comparing interfaces and type aliases:

- Both are used to create custom structures and data types which can be shared.
- A type alias is a way to provide a new name for a type. It can represent primitive types, union types, intersection
  types, etc.
- An interface is a structure that defines the contract for classes to follow. Interfaces define properties, methods, and
  events, which are the members of the interface. Interfaces contain only the declaration of the members.It’s up to the class that implements this interface to provide the specific implementation.
- Interfaces are extendable, implementable, and mergeable, making them suitable for defining object structures and
  class blueprints.
- Type aliases define custom complex types and are not extendable or implementable. They're used for specific type
  combinations.
- Choosing between interfaces and type aliases is based on coding requirements and preferences.

## variables - Interfaces

In TypeScript and other object-oriented programming languages:

1. `Interfaces` are created to define a contract / blueprint for classes. They specify the shape that an object should have, including the properties (variables) and their types.

2. These interfaces are then `implemented by classes`. The classes provide the actual implementation for the properties and methods defined in the interface.

3. `Objects` are then created from these classes(blueprint for objects). 

4. These objects contain properties (`variables`) which can store both `primitive`(number,string,boolean,null,undefined,symbol,bigint) and `complex data types`(Arrays, Objects,Tuples,Enums,Union Types,Intersection Types,Interfaces,Classes,Functions,Generics,Mapped Types,Literal Types,Type Aliases) as their values.
   The structure of these objects adheres to the syntax provided by the interface.
5. This process covers a wide range of topics in TypeScript, from the basics of variables to the more complex concepts of interfaces and classes.
