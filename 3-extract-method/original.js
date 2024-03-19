class PriceCalculator {
  constructor() {
    this.items = [];
  }

  calculateItemPrice(index) {
    let price = this.items[index].price;
    if (this.items[index].quantity > 10) {
      // 5% discount over 10 items
      price = this.items[index].price * 0.95;
    }
    return price * this.items[index].discount * this.items[index].quantity;
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      let price = item.price;
      if (item.quantity > 10) {
        // 5% discount over 10 items
        price = item.price * 0.95;
      }
      totalPrice += price * item.discount * item.quantity;
    }
    if (totalPrice < 250) {
      return totalPrice + 20; // add shipping
    } else {
      return totalPrice; // free shipping over 250
    }
  }
}

module.exports = PriceCalculator;