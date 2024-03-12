/* Checking Usernames: 
Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.
*/

let currentUsers: string[] = ["Ali", "admin", "Liaqat", "Waqar"];
let newUsers: string[] = ["Tahir", "hussain", "Rahat"];

newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});