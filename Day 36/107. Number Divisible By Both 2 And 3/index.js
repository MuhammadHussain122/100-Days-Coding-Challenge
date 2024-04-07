/* Number is divisible by 2 or 3:
Write a condition using logical operators that checks if a number is divisible by both  2 and 3.
*/
function numberDivisiblity(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(`${num} is divisible by both 2 and 3`);
    }
    else if (num % 2 === 0 && num % 3 !== 0) {
        console.log(`${num} is divisible by 2 and but not by 3`);
    }
    else if (num % 2 !== 0 && num % 3 === 0) {
        console.log(`${num} is divisible by 3 and but not by 2`);
    }
    else if (num % 2 !== 0 && num % 3 !== 0) {
        console.log(`${num} is not divisible by both 2 and 3`);
    }
    else {
        console.log("Enter a correct number");
    }
}
numberDivisiblity(24);
numberDivisiblity(22);
numberDivisiblity(27);
numberDivisiblity(23);
export {};
