/* Sandwiches: 
Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/

function make_sandwich(...items:string[])
{
  console.log("Items");
  if(items.length===0){
    console.log("You have not ordered any sandwich");
  }
  else{
    console.log(items);
  }
}
make_sandwich("lettuce", "tomato","cucumber");
make_sandwich("cheddar", "Swiss","provolone");
make_sandwich();
