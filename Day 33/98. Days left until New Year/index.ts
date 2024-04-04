/* Days left until New Year
Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/

function daysLeftUntilNewYear(): number {
  const currentDate = new Date();
  console.log(`Current Date: ${currentDate}`);
  const newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
  const difference = newYear.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return daysLeft;
}
console.log(`Days left until New Year: ${daysLeftUntilNewYear()}`);
