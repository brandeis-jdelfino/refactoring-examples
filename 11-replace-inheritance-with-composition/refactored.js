// We've replaced inheritance with composition, by using a separate class for each behavior.
// This makes the behavior of each class more clear, and the overall Animal class more flexible.
// Inheritance is NOT a good way to re-use code!

class NormalSound {
    constructor(sound) {
        this.sound = sound;
    }
    speak() {
        console.log(`${this.name} ${this.sound}.`);
    }
}

class NormalWalker {
    walk() {
        console.log(`${this.name} is walking.`);
    }
}

class CantWalk {
    walk() {
        throw new Error(`${this.name} cannot walk.`);
    }
}

class Animal {
    constructor(name, speak, walk) {
        this.speak = speak;
        this.walk = walk;
        this.name = name;
    }

    speak() {
        this.speak();
    }

    walk() {
        this.walk();
    }
}

function makeDog(name) {
    return new Animal(name, new NormalSound('barks'), new NormalWalker());
}

function makeCat(name) {
    return new Animal(name, new NormalSound('meows'), new CantWalk());
}