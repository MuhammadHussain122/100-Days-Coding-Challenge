/* Birthday:
Generate a date object representing your next birthday and log it to the console.
*/
function myNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = myNextBirthday(8, 1);
console.log("My next birthday is on:", nextBirthday.toLocaleDateString());
export {};
