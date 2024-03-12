/* Checking Usernames:
Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.
*/
var currentUsers = ["Ali", "admin", "Liaqat", "Waqar"];
var newUsers = ["Tahir", "hussain", "Rahat"];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
