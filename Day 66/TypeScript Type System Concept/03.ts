// NULLABLE TYPES

let username: string | null = "Hussain"; // The variable can hold a string or null
let rollNo: number | null = null; // The variable can hold a number or null

function studentInfo(stdName: string | null) {
  if (stdName === null) {
    console.log("Student not found!");
  } else {
    console.log(`Student name: ${stdName}!`);
  }
}

studentInfo("Hussain"); // Output: Student name: Hussain!
studentInfo(null); // Output: Student not found!
