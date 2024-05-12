// Static Members in Classes
class ProductStaticMembers {
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {    // Static members belong to the class itself rather than instances of the class.
      return ProductStaticMembers.nextId++;
    }
  
    getProductInfo(): string {
  
      return `ID: ${this.id}, Name: ${this.name}`;
    }
}