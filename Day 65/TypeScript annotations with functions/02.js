// OPTIONAL AND DEFAULT PARAMETER
// Optional Parameters:
function studentInfo(name, rollNo) {
    if (rollNo !== undefined) {
        console.log("Hello, ".concat(name, "! Your roll number is ").concat(rollNo, "."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
studentInfo("Qasim"); // Output: "Hello, Qasim!"
studentInfo("Qasim", 10); // Output: "Hello, Qasim! Your roll number is 10."
// Default Parameters:
function studentInfoDefault(name, rollNo) {
    if (rollNo === void 0) { rollNo = 10; }
    console.log("Hello, ".concat(name, "! Your roll number is ").concat(rollNo));
}
studentInfoDefault("Qasim"); // Output: "Hello, Qasim! Your roll number is 10."
studentInfoDefault("Qasim", 12); // Output: "Hello, Qasim! Your roll number is 12"
