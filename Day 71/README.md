1. ## Class Type Annotations:

   Used to specify types of properties, methods, and constructor parameters in a class, ensuring type safety.
   They define the expected data types and enable TypeScript to perform type checking to ensure that class instances adhere to the defined structure.

2. ## Class Access Modifiers:

   Control visibility and accessibility of class members (public, private, protected).
   `Public:` Public members are accessible from anywhere, both within and outside the class they are defined in.
   `Private:` Private members are accessible only within the class they are declared in. They cannot be accessed or modified from outside the class.
   `Protected:` Protected members are accessible within the class they are defined in, as well as by subclasses (derived classes) but not from outside the class or unrelated classes.
   `Default (No Modifier):` Members without an explicit access modifier are considered public by default. They are accessible from anywhere, both within and outside the class.

3. ## Class Accessors (Getters and Setters):

   Allow controlled access to class properties, enabling additional logic.
   `Getter:` A getter is a method used to retrieve the value of a private or protected property from within a class. It provides controlled access to the property and can include additional logic before returning the value.
   `Setter:` A setter is a method used to set the value of a private or protected property from within a class. It provides controlled mutation of the property's value and can include validation or other logic before assigning the new value.

4. ## Static Members in Classes:
   Properties or methods belonging to the class itself, accessible without instance/object creation.
   `Static:` Static members belong to the class itself rather than instances / objects of the class. They are accessed using the class name without the need for class instantiation(object creation using class).
5. ## Implementing Interfaces:

   Ensures classes provide properties and methods required by an interface, enforcing a consistent structure.
   In TypeScript, a class can implement an interface by providing implementations for all the members declared in the interface. This allows you to enforce that a class meets a certain contract / blueprint / agreement / template defined by the interface

6. ## Abstract Classes and Members:
   Serve as blueprints, cannot be instantiated directly, and can contain abstract methods.
   Abstract classes in TypeScript serve as blueprints for other classes. They define the structure and behavior that subclasses should adhere to, but they cannot be instantiated(object creation) directly themselves. Additionally, abstract classes can contain abstract methods, which are methods without a concrete implementation.

Let's break down each aspect:

`Blueprints:` Abstract classes define a set of properties and methods that should be implemented by subclasses. They provide a template or a blueprint for how other classes should be structured.

`Cannot be instantiated directly:` Unlike regular classes, you cannot create an instance of an abstract class using the `new` keyword. Abstract classes are meant to be extended by other classes, and they often contain one or more abstract methods that need to be implemented by the subclasses.

`Contain abstract methods:` Abstract classes can have methods without an implementation. These methods are declared with the abstract keyword and do not provide any code block. Subclasses must implement these abstract methods with their own specific implementations.

7. ## Polymorphism & Method Override:
   Demonstrates the ability to call overridden methods on different concrete subclasses, showcasing polymorphic behavior.

`Polymorphism and method overriding` are key concepts in object-oriented programming, and TypeScript supports them through its `class inheritance` mechanism.

Example:

```TypeScript
// base / parent / super Class 'Animal'.
abstract class Animal {
    abstract makeSound(): string;
}

class Dog extends Animal {
    makeSound(): string {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow!";
    }
}
```

# Explanation:

1. **Polymorphism (Analogous to Different Species of Animals):**

   - Think of polymorphism like different species of animals responding to a common command. For instance, if you tell animals to "make a sound", each species would respond differently.
   - In our example, both `Dog` and `Cat` extend the `Animal` class. Despite being different types of animals, they both have their own way of making sounds.
   - When we declare a variable of type `Animal`(class) and assign a `Dog` or `Cat` objects/instances to it, it's like having different species of animals represented by the same "Animal" label.

2. **Method Override (Analogous to Different Behaviors):**
   - Method override is like teaching different species of animals how to respond to a common command in their own way.
   - In the `Animal` class, we declare an abstract method `makeSound()`, which each subclass (`Dog` and `Cat`) must implement.
   - `Dog` and `Cat` override the `makeSound()` method inherited from `Animal`, providing their own implementation of how they make sounds.
   - When we call `makeSound()` on a `Dog` or `Cat` object, it invokes the overridden version specific to that subclass, mimicking the behavior of that particular animal.


## Differences between constructors and methods of a class in TypeScript:

**Constructor:**

- Created / defined automatically when we create a class or we can create it explicitly.
- The constructor is a special method invoked/called automatically when an instance/object of the class is created using the new keyword.
- It initializes the newly created object with initial values or performs any setup required before the object can be used.
- There can be only one constructor per class, and it cannot have a return type.
- It typically sets initial values to the instance properties or performs other initialization tasks.
- Constructors can accept parameters to customize the initialization of instances.
- The constructor is defined using the constructor keyword followed by a parameter list and optional method body.

**Method:**

- A method is a function defined within a class that performs some action or computes some result.
- Methods are called explicitly by the code that uses the class instance.
- Unlike the constructor, there can be multiple methods within a class, each serving a specific purpose.
- Methods can have return types specifying the type of value they return, or they can have a void return type if they don't return anything.
- Methods can accept parameters to perform actions based on the provided inputs.
- Methods are defined using the regular function syntax within the class body, optionally with a return type and parameter list.
