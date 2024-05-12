// Class Access Modifiers
class MyClassPublic {
    public name: string; //  Public members are accessible from anywhere,

    constructor(name: string) {
        this.name = name;
    }
}

class MyClassPrivate {      //  private modifier prevent direct modifications of data fields.
    private secret: string; // Private members are accessible only within the class they are declared in. 
    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret);
    }
}

class Parent {
    protected familyName: string; // Protected members are accessible within the class they are defined in, as well as by subclasses.

    constructor(name: string) {
        this.familyName = name;
    }
}

// Default (No Modifier): Members without an explicit access modifier are considered public by default. 