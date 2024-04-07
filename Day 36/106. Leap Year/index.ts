/* Leap Year:
Determine if a given number is a leap year using comparison operators.
*/

function leapYear(year: number) {
  if (year % 4 === 0 || year % 400 === 0) {
    console.log(`${year} is a Leap year`);
  } else {
    console.log(`${year} is not a Leap year`);
  }
}
leapYear(2024);
leapYear(2023);
leapYear(2025);
