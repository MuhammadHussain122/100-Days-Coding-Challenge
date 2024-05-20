// Class Accessors (Getters and Setters)
class ProductExAccessors {
    id;
    name;
    _price;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        }
        else {
            console.log("Price cannot be negative.");
        }
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
}
export {};
