// Polymorphism & Method Override
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
