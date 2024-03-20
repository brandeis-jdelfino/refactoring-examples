// We've improved the CandyBar class by making it take all of its properties in the constructor.
// This allows us to create a fully initialized CandyBar, and makes it harder to create a partially
// valid object.

class CandyBar {
    constructor(name, ingredients, calories, tastiness) {   
        this.name = name;
        this.ingredients = ingredients;
        this.calories = calories;
        this.tastiness = tastiness;
    }
}

// Example usage:
let snickers = new CandyBar('Snickers', ['chocolate', 'caramel', 'peanuts'], 250, 10);
console.log(snickers);
