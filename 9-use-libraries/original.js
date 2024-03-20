class StatisticsCalculator {
    constructor(numbers) {
        this.numbers = numbers;
    }

    getSum() {
        return this.numbers.reduce((acc, num) => acc + num, 0);
    }

    getAverage() {
        return this.getSum() / this.numbers.length;
    }

    getMax() {
        return Math.max(...this.numbers);
    }

    getMin() {
        return Math.min(...this.numbers);
    }

    getStandardDeviation() {
        const mean = this.getAverage();
        const squaredDifferences = this.numbers.map(num => Math.pow(num - mean, 2));
        const variance = squaredDifferences.reduce((acc, num) => acc + num, 0) / this.numbers.length;
        return Math.sqrt(variance);
    }

    getDotProduct(list) {
        if (this.numbers.length !== list.length) {
            throw new Error('The lengths of the two lists must be the same.');
        }
        let dotProduct = 0;
        for (let i = 0; i < this.numbers.length; i++) {
            dotProduct += this.numbers[i] * list[i];
        }
        return dotProduct;
    }
}
