/* Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var guestList = ["Ali", "Hasnain", "Saleem", "Qurban", "Akhtar"];
var message = "I am glad to invite you for dinner";
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear", guestList[i], ",", message);
}
