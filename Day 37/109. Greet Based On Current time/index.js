/* Greet based on current time:
Write an if statement that logs "Good Morning" if the current time is before 12 PM.
*/
function greetBasedOnTime() {
    let getCurrentTime = new Date().getHours();
    if (getCurrentTime >= 5 && getCurrentTime <= 12) {
        console.log("Good Morning");
    }
    else if (getCurrentTime > 12 && getCurrentTime <= 16) {
        console.log("Good Afternoon");
    }
    else if (getCurrentTime >= 17 && getCurrentTime <= 19) {
        console.log("Good Evening");
    }
    else if ((getCurrentTime >= 20 && getCurrentTime <= 24) ||
        (getCurrentTime >= 0 && getCurrentTime <= 4)) {
        console.log("Good Night");
    }
}
greetBasedOnTime();
export {};
