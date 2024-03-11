/* Think of something you could store in a TypeScript Object.
  Write a program that creates Objects containing these items.
*/
var student = {
    Name: "M Hussain",
    Roll_NO: 172347,
    role: function () {
        var work1, work2, work3;
        work1 = "Submit assignments assigned.";
        work2 = "Submit project assigned.";
        console.log("Role\n ".concat(work1, "\n ").concat(work2));
    }
};
console.log("Name: ".concat(student.Name, "\n Roll No: ").concat(student.Roll_NO));
student.role();
