/*
Create a Promise that resolves with "Hello, World!" after 2 seconds.
*/
import chalkAnimation from "chalk-animation";
const rest = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function welcomeMsg() {
    let welcomeMessage = chalkAnimation.rainbow("Hello, World!");
    await rest(); // The 'await' keyword pauses the execution until the Promise is fullfiled.
    welcomeMessage.stop();
}
await welcomeMsg();
