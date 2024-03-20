class CandyBar {
    constructor(name) {
        this.name = name;
        this.ingredients = [];
        this.calories = null;
        this.tastiness = null;
    }
}

// Example usage:
let snickers = new CandyBar('Snickers');
snickers.ingredients = ['chocolate', 'caramel', 'peanuts'];
snickers.calories = 250;
snickers.tastiness = 10;
console.log(snickers);
