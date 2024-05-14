// GENERICS AND INTERFACES 

// Interface definition for  Game
interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
  }
  
  // Generic Class `Collection`
  class Collection<T> {
    public data: T[] = [];
  
    // Method to add an item of type `T` to the collection
    add(item: T): void {
      this.data.push(item);
    }
  }
  // `T` is a placeholder type for the interface. When you implement this interface, you can specify the type.
  // Creating an instance / object of `Collection` with type parameter `Game`
  let itemTwo = new Collection<Game>();
  itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
  });
  console.log(itemTwo);
  
