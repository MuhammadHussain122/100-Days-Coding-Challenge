/* Compound Assignment Operator:
Use compound assignment operator to simplify arithmetic operations. Start with c = 6 and perform a series of 
operations(addition, subtraction, multiplication, division) on c using compound operators.
*/

function compoundAssignmentOperators() {
  let c = 6;
  console.log(`Initial value of c: ${c}`);
  c += 3; // addition, c = 9.
  console.log(`Value of c after addition: ${c}`);
  c -= 2; // subtraction, c = 7.
  console.log(`Value of c after subtraction: ${c}`);
  c *= 5; // multiplication, c = 35
  console.log(`Value of c after multiplication: ${c}`);
  c /= 7; // division, c = 5
  console.log(`Value of c after division: ${c}`);
}
compoundAssignmentOperators();
