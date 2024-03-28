/* Default Parameters:
Write a function that greets a user. It should take the user's name as a parameter and say hellow. If no name is given, 
it should greet an anonymous user.
*/

function  greetUser(userName: string){
    if(userName){
    console.log(`Assalamualaikum! dear ${userName}, How are you?`)
    } else {
        console.log("an anonymous person")
    }
}
greetUser("Ali");
greetUser("");



