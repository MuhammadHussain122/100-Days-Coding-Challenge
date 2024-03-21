/* Self-Running User Profile:
Create a quick, self-setup profile for a user that can tell you the user's name and age.

Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by
itself and can tell you about the user.
*/
var userData = (function () {
    var name = "Ali";
    var age = 15;
    function showInfo() {
        console.log("userName: ".concat(name, "\n Age: ").concat(age));
    }
    return showInfo();
})();
