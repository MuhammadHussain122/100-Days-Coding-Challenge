// Class Access Modifiers
class MyClassPublic {
    name; //  Public members are accessible from anywhere,
    constructor(name) {
        this.name = name;
    }
}
class MyClassPrivate {
    secret; // Private members are accessible only within the class they are declared in. 
    constructor(secret) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(this.secret);
    }
}
class Parent {
    familyName; // Protected members are accessible within the class they are defined in, as well as by subclasses.
    constructor(name) {
        this.familyName = name;
    }
}
export {};
// Default (No Modifier): Members without an explicit access modifier are considered public by default. 
