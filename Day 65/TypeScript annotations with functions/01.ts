// TYPE ANNOTATIONS WITH FUNCTION

// Function to calculate the area of a circle
function calculateCircleArea(radius: number): number {
  return Math.PI * (radius * radius);
}

// Calling the function with valid arguments
const area = calculateCircleArea(3.4);
console.log(`The area of the circle is: ${area.toFixed(2)}`);

