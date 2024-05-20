// GENERICS AND INTERFACES 
// Generic Class `Collection`
class Collection {
    data = [];
    // Method to add an item of type `T` to the collection
    add(item) {
        this.data.push(item);
    }
}
// `T` is a placeholder type for the interface. When you implement this interface, you can specify the type.
// Creating an instance / object of `Collection` with type parameter `Game`
let itemTwo = new Collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
export {};
