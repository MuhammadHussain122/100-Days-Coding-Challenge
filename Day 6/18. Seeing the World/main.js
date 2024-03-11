/* Seeing the World:
Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
*/
var favoritePlaces = ["Singapor", "Dubai", "Iran", "Japan", "Murree"];
console.log("Array in Original order: ".concat(favoritePlaces, ",\n"));
var sortedList = favoritePlaces.sort();
console.log("Array in Alphabetical order: ".concat(sortedList, ",\n"));
var reversedSortedList = sortedList.sort().reverse();
console.log("Array in resversed Alphabetical order: ".concat(reversedSortedList, ",\n"));
