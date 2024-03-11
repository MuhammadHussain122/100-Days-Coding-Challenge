/* Think of something you could store in a TypeScript Object. 
  Write a program that creates Objects containing these items.
*/

let student : { Name:string; Roll_NO: number; role:any}={
  Name: "M Hussain",
  Roll_NO: 172347,
  role(){
    let work1, work2, work3;
    work1 = "Submit assignments assigned.";
    work2 = "Submit project assigned.";
    console.log(`Role\n ${work1}\n ${work2}`);
  }
}
console.log(`Name: ${student.Name}\n Roll No: ${student.Roll_NO}`);
student.role();