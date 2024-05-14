// GENERICS CLASSES 
// Generic Class `User`
var Student = /** @class */ (function () {
    function Student(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    Student.prototype.show = function (percentage) {
        console.log("".concat(percentage, " - ").concat(this.value, "%"));
    };
    return Student;
}());
// `T` is a placeholder type. When you call this function, you can replace `T` with any type, like `number`, `string`, etc.
// Creating an instance / object of `User` with a specific type parameter (string)
var studentOne = new Student("85");
studentOne.value;
console.log("studentOne:");
studentOne.show("Percentage");
// Creating an instance / object of `User` with a type parameter that can be a number or a string
var studentTwo = new Student(90);
studentTwo.value;
console.log("studentTwo:");
studentTwo.show("Percentage");
