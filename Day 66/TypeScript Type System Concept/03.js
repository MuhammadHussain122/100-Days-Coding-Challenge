// NULLABLE TYPES
let username = "Hussain"; // The variable can hold a string or null
let rollNo = null; // The variable can hold a number or null
function studentInfo(stdName) {
    if (stdName === null) {
        console.log("Student not found!");
    }
    else {
        console.log(`Student name: ${stdName}!`);
    }
}
studentInfo("Hussain"); // Output: Student name: Hussain!
studentInfo(null); // Output: Student not found!
export {};
