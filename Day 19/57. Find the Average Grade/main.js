/* Find the Average Grade:
Given a list of grades, calculate the average grade.

Explain & TIP:
We can sum up all the grades and divide by the number of grades to find the average, giving us
an idea of how well someone did overall.
*/
let grades = [13, 14, 8, 20, 65, 33];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
export {};
