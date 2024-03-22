"use strict";
/* Checking Usernames:
Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let currentUsers = ["Ali", "admin", "Liaqat", "Waqar"];
let newUsers = ["Tahir", "hussain", "Rahat"];
newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
