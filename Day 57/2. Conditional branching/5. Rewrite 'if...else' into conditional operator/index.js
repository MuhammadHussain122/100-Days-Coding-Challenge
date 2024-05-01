/* Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let welcomeMessage;

if (login == 'customer') {
  welcomeMessage = 'Hello';
} else if (login == 'manager') {
  welcomeMessage = 'Greetings';
} else if (login == '') {
  welcomeMessage = 'No login';
} else {
  welcomeMessage = '';
}
*/

// Rewritten using multiple ternary operators
let welcomeMessage = (login == 'customer') ? 'Hello' :
(login == 'manager') ? 'Greetings' :
(login == '') ? 'No login' :
'';