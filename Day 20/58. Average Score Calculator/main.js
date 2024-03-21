/* Average Score Calculator:
Write a simple program that can take lots of scores and find their average.

Explain & TIP:
This program can handle any number of scores you give it, and it tells you the average score.
Handy for seeing how well you did overall!
*/
function scores() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var totalScore = 0;
    scores.forEach(function (score) {
        totalScore = totalScore + score;
    });
    var averageScore = "Average score: ".concat(totalScore / scores.length);
    return averageScore;
}
console.log(scores(3, 34, 23, 34, 45, 67, 34, 78, 99, 34));
