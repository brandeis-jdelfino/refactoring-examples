class PriceCalculator {
    constructor() {
        this.items = [];
    }

    static _calculateItemPrice(item) {
        let price = item.price;
        if (item.quantity > 10) {
            // 5% discount over 10 items
            price = item.price * 0.95;
        }
        return price * item.discount * item.quantity;
    }

    static _addShippingToTotal(totalPrice) {
        if (totalPrice < 250) {
            return totalPrice + 20; // add shipping
        } else {
            return totalPrice; // free shipping over 250
        }
    }
    
    calculateItemPrice(index) {
        return _calculateItemPrice(this.items[index]);
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (const item of this.items) {
            totalPrice += _calculateItemPrice(item);
        }
        return _addShippingToTotal(totalPrice);
    }
}