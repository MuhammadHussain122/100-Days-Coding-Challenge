// What is the last value alerted by this code? Why?

let i = 5;

while (i) {
  alert( i-- );
}
/* Last value will be 1 because we have used the condition that 'i' should be true means 1 but at 0 'i' becomes false
and the condition does not met so the loop breaks after the last output 1.
*/
