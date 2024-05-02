/* For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

*/

// The prefix form ++i:
let i = 0;
while (++i < 5) alert( i ); // Output: 1, 2, 3, 4
/*
1. ++0, 1 > 5 => 1
2. ++1, 2 > 5 => 2
3. ++2, 3 > 5 => 3
4. ++3, 4 > 5 => 4
5. ++4, 5 > 5 => loop breaks
*/

// The postfix form i++
while (i++ < 5) alert( i ); // output:  1, 2, 3, 4, 5
/*
1. 0 > 5 , 0++ => 1
2. 1 > 5 , 1++ => 2
3. 2 > 5 , 2++ => 3
4. 3 > 5 , 3++ => 4
5. 4 > 5 , 4++ => 5
6. 5 > 5 => loop breaks
*/