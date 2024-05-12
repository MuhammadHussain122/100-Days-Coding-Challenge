// Abstract Classes and Members
abstract class AbstractItem {
    private static nextId: number = 1;
  
    constructor(public id: number, protected name: string) {}
  
    static generateNextId(): number {
      return AbstractItem.nextId++;
    }
  
    abstract getItemInfo(): string;
  }
  