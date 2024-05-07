// NULLABLE TYPES 
var username = "Hussain"; // The variable can hold a string or null
var rollNo = null; // The variable can hold a number or null
function studentInfo(stdName) {
    if (stdName === null) {
        console.log("Student not found!");
    }
    else {
        console.log("Student name: ".concat(stdName, "!"));
    }
}
studentInfo("Hussain"); // Output: Student name: Hussain!
studentInfo(null); // Output: Student not found!
