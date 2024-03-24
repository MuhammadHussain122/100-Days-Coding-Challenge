/*  Making a Student Template: 
Create a blueprint for student information, including their name, age, and the classes they're taking, and 
then fill in this blueprint with an example student.

Explain & TIP: 
This blueprint, called an interface, helps ensure all students have the same kind of information, making 
your code more organized.
*/

interface studentInfo{
    name: string,
    age: number,
    coursesName: string[],

}

let student: studentInfo={
    name: "Qasim",
    age: 20,
    coursesName: ["ICT", "DLD", "DCCN", "OOP"],
}

console.log(student);
