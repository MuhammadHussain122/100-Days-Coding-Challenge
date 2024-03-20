/* Enhanced Laptop Object:
Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence
about the laptop.
*/
var laptop = {
    name: "Dell",
    model: "XP 15",
    year: 2020,
    describe: function () {
        console.log("This Laptop is a ".concat(this.name, " ").concat(this.model, " manufactured in ").concat(this.year, "."));
    }
};
laptop.describe();
