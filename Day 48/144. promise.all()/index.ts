/*
Explain the use of the Promise.all() method with an example.
*/

const promise1 = Promise.resolve(true);
const promise2 = Promise.resolve(true);
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 2000, true);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
