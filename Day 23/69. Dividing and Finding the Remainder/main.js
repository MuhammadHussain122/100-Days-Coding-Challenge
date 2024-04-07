/* Dividing and Finding the Remainder:
Write a function that divides two numbers and returns both the quotient and and the remainder.
Use an object to return both values.
*/
function Division(Dividend, Divisor) {
    let QuotientRemainder = {
        quotient: Dividend / Divisor,
        remainder: Dividend % Divisor,
    };
    console.log(`Quotient: ${QuotientRemainder.quotient}`);
    console.log(`Remainder: ${QuotientRemainder.remainder}`);
}
Division(14, 4);
export {};
