/*
Discuss the significance of the await reserved word in asynchronous JavaScript.
*/
import chalkAnimation from "chalk-animation";
const rest = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcomeMsg() {
    let welcomeMessage = chalkAnimation.rainbow("Welcome");
    await rest(); // The 'await' keyword pauses the execution until the Promise is fullfiled.
    welcomeMessage.stop();
}
await welcomeMsg();
