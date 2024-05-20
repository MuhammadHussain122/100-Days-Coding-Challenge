// Polymorphism & Method Override
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}
export {};
