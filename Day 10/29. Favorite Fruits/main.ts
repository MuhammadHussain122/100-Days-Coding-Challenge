/* Favorite Fruits: 
Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/
let favorite_fruits: string[] = ["Apples", "Apricots", "Cherries", "Mangoes","Bananas"];
if(favorite_fruits.includes("Apples")){
 console.log("You really like Apples!");
}
if(favorite_fruits.includes("Apricots")){
  console.log("You really like Apricots!");
}
if(favorite_fruits.includes("PineApples")){
  console.log("You really like PineApples!");
}
if(favorite_fruits.includes("Cherries")){
  console.log("You really like cherries!");
}