/*
Demonstrate the use of the setTimeout() function to execute code after a delay.
*/
import chalkAnimation from "chalk-animation";
const rest = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000); /* setTimeout is a timer function that combine an appropriate event
        with a callback function and executes that callback when the specified event occurs.*/
    });
};
async function welcomeMsg() {
    let welcomeMessage = chalkAnimation.rainbow("Hello, World!");
    await rest();
    welcomeMessage.stop();
}
await welcomeMsg();
