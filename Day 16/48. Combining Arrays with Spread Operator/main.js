/* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
 Use the spread operator to combine thesearrays into a single array sorted in ascending order, then log the result.
*/
let priceSet1 = [1200, 1000, 1500];
let priceSet2 = [2000, 1300, 3000];
let combinePrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinePrices);
export {};
