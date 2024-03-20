class PriceCalculator {
    getSeasonalDiscount() { /* ... */ }
    getFees() { /* ... */ }

    // We've simplified calcPrice, without really adding to the complexity of discountedPrice
    calcPrice(quantity, itemPrice) {
        return this.discountedPrice(quantity * itemPrice);
    }

    discountedPrice(basePrice, seasonDiscount, fees) {
        return basePrice - this.getSeasonalDiscount() + this.getFees();
    }
}
