// GENERICS AND INTERFACES 
// Generic Class `Collection`
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    // Method to add an item of type `T` to the collection
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
// `T` is a placeholder type for the interface. When you implement this interface, you can specify the type.
// Creating an instance / object of `Collection` with type parameter `Game`
var itemTwo = new Collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
