// Class Accessors (Getters and Setters)
class ProductExAccessors {
    private _price: number;
  
    constructor(private id: number, private name: string) {
      this._price = 0;
    }
  
    get price(): number {  // A getter(accessor) is a method used to retrieve/access the value of a private or protected property from within a class. 
      return this._price;
    }
  
    set price(newPrice: number) {  // A setter(mutator) is a method used to set/modify the value of a private or protected property from within a class.  
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
      }
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
}
