const math = require('mathjs');

// We've simplified (and maybe even removed the need for) this class by delegating computation to
// a mature, well-tested, well-supported third-party library.
class StatisticsCalculator {
    constructor(numbers) {
        this.numbers = numbers;
    }

    getSum() {
        return math.sum(this.numbers);
    }

    getAverage() {
        return math.mean(this.numbers);
    }

    getMax() {
        return math.max(this.numbers);
    }

    getMin() {
        return math.min(this.numbers);
    }

    getStandardDeviation() {
        return math.std(this.numbers);
    }

    getDotProduct(other) {
        return math.dot(this.numbers, other);
    }
}
