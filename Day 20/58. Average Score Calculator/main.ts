/* Average Score Calculator: 
Write a simple program that can take lots of scores and find their average.

Explain & TIP: 
This program can handle any number of scores you give it, and it tells you the average score. 
Handy for seeing how well you did overall!
*/

function scores(...scores: number[]){
    let totalScore =0;
    scores.forEach(score => {
    totalScore = totalScore + score;
 });
 let averageScore= `Average score: ${totalScore/scores.length}`;
 return averageScore;
}

console.log(scores(3, 34, 23, 34, 45, 67, 34, 78, 99, 34));
