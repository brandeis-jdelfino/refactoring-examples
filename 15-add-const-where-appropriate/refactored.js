class CandyBar {
    constructor(name, ingredients, calories, tastiness) {   
        this.name = name;
        this.ingredients = ingredients;
        this.calories = calories;
        this.tastiness = tastiness;
    }
}

// Example usage:
// If we aren't going to change snickers, we should declare it as const.
// Not only does this provide us with a guarantee that snickers won't change, but it also
// makes it clear to other developers that snickers shouldn't change.
const snickers = new CandyBar('Snickers', ['chocolate', 'caramel', 'peanuts'], 250, 10);
console.log(snickers);
