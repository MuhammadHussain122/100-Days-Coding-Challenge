/* For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?
*/

// The postfix form:
for (let i = 0; i < 5; i++) alert( i );
/*
1. 0 > 5 => 0 , 0++
2. 1 > 5 => 1 , 1++
3. 2 > 5 => 2 , 2++
4. 3 > 5 => 3 , 3++
5. 4 > 5 => 4 , 4++
6. 5 > 5 => loop breaks
*/

// The prefix form:
 for (let i = 0; i < 5; ++i) alert( i );
/*
1. 0 > 5 => 0 , ++0
2. 1 > 5 => 1 , ++1
3. 2 > 5 => 2 , ++2
4. 3 > 5 => 3 , ++3
5. 4 > 5 => 4 , ++4
6. 5 > 5 => loop breaks
*/