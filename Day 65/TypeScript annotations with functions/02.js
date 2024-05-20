// OPTIONAL AND DEFAULT PARAMETER
// Optional Parameters:
function studentInfo(name, rollNo) {
    if (rollNo !== undefined) {
        console.log(`Hello, ${name}! Your roll number is ${rollNo}.`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
studentInfo("Qasim"); // Output: "Hello, Qasim!"
studentInfo("Qasim", 10); // Output: "Hello, Qasim! Your roll number is 10."
// Default Parameters:
function studentInfoDefault(name, rollNo = 10) {
    console.log(`Hello, ${name}! Your roll number is ${rollNo}`);
}
studentInfoDefault("Qasim"); // Output: "Hello, Qasim! Your roll number is 10."
studentInfoDefault("Qasim", 12); // Output: "Hello, Qasim! Your roll number is 12"
export {};
