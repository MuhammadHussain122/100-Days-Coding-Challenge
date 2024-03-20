/* Keep Only Strings:
Given a mix of different types of items, make a new list that has only the words.

Explain & TIP:
We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
*/
var mixedArray = [1, "Apricot", 2, "Orange", true, "Mango"];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray);
