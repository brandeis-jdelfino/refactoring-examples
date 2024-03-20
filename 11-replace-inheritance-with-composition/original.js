class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    speak() {
        console.log(`${this.name} meows.`);
    }

    walk() {
        throw new Error(`${this.name} cannot walk.`);
    }
}
