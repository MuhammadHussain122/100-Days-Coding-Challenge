/* The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
Is there any difference in the behavior of these two variants?
*/


/* Yes, the behavior of these variants are different.
Behavior of First variant:
In first variant if the age the of user is less than 18 then it will ask for confirmation if user's parent allowed
user to perform certain activity.
Behavior of Second variant:
In second variant we have removed the else statement which was used to ask for confirmation so this time even if the 
user's age is less than 18, he is not ask for confirmation.
*/