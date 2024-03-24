/* Shape Shifter: 
Write a program that can describe either a circle or a rectangle using a special type alias, including 
properties unique to each shape.

Explain & TIP: 
A type alias lets you create a custom type. It's like a shortcut for describing more complex information, 
such as the details of different shapes.
*/

type Shape ={
    Type: "circle" | "rectangle";
    radius?: number;
    width?: number;
    length?: number;

};

let rectangle: Shape ={
   Type: "circle",
   radius: 7,
}  

let circle: Shape= {
    Type: "rectangle",
    width: 10,
    length: 16,
}

console.log(circle);
console.log(rectangle);