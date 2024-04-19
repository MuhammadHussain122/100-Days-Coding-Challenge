/*
Explain how to handle errors in a callback function.
*/
function addNumbers(
  callback: (error: Error | null, num1?: number, num2?: number) => void
): void {
  
  const error = new Error("Failed to fetch data");
  const num1 = 3;
  const num2 = 4;
  const add = num1 + num2;

  
  if (add === 7) {
    callback(null, add); 
  } else {
    callback(error); 
  }
}

addNumbers((error, add) => {
  if (error) {
    console.error(error.message); 
  } else {
    console.log(add); 
  }
});
