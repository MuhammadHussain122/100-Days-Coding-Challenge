/* Greetings:
Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.
*/
var friendsName = ["Ali", "Ahmed", "Hasnain", "Qurban", "Saleem"];
var message = "May you get success in every aspect of life";
for (var i = 0; i < friendsName.length; i++) {
    console.log("Dear", friendsName[i], ",", message);
}
