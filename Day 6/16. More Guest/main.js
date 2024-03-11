/* More Guests:
You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
you found bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.

*/
var guestList = ["Ali", "Hasnain", "Saleem", "Qurban", "Akhtar"];
var message = "I am glad to invite you for dinner";
console.log("Wow! I found more spaces for guest");
guestList.unshift("Waqar");
guestList.splice(3, 0, "Farooq");
guestList.push("Ibrahim");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", ").concat(message, ","));
});
/* OR
for(let i =0; i< guestList.length; i++ )
{
console.log("Dear", guestList[i],",", message);
}
*/ 
