// Implementing Interfaces
interface ProductInterface {
    id: number;
    name: string;
    getProductInfo(): string;
}

class ProductImplementInterface implements ProductInterface {
    private static nextId: number = 1;
  
    constructor(public id: number, public name: string) {}
  
    static generateNextId(): number {
      return ProductImplementInterface.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
}

