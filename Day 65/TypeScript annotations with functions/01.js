// TYPE ANNOTATIONS WITH FUNCTION
// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * (radius * radius);
}
// Calling the function with valid arguments
var area = calculateCircleArea(3.4);
console.log("The area of the circle is: ".concat(area.toFixed(2)));
