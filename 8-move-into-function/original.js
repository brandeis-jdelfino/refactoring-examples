class PriceCalculator {
    getSeasonalDiscount() { /* ... */ }
    getFees() { /* ... */ }

    calcPrice(quantity, itemPrice) {
        const basePrice = quantity * itemPrice;
        const seasonDiscount = this.getSeasonalDiscount();
        const fees = this.getFees();
        return this.discountedPrice(basePrice, seasonDiscount, fees);
    }

    discountedPrice(basePrice, seasonDiscount, fees) {
        return basePrice - seasonDiscount + fees;
    }
}
