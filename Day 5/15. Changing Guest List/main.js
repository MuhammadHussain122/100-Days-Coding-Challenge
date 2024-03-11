/* Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/
var guestList = ["Ali", "Hasnain", "Saleem", "Qurban", "Akhtar"];
var message = "I am glad to invite you for dinner";
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear", guestList[i], ",", message);
}
console.log(guestList[4], "can't make dinner");
guestList.pop();
guestList.push("Ahmed");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear", guestList[i], ",", message);
}
