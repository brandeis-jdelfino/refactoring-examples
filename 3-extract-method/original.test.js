const PriceCalculator = require('./original');

describe('PriceCalculator', () => {
  let priceCalculator;

  beforeEach(() => {
    priceCalculator = new PriceCalculator();
  });

  it('should calculate item price without discount', () => {
    priceCalculator.items = [
      { price: 10, quantity: 5, discount: 1 },
      { price: 20, quantity: 3, discount: 1 },
    ];

    const itemPrice = priceCalculator.calculateItemPrice(0);

    expect(itemPrice).toBe(50);
  });

  it('should calculate item price with discount', () => {
    priceCalculator.items = [
      { price: 10, quantity: 15, discount: 0.95 },
      { price: 20, quantity: 3, discount: 1 },
    ];

    const itemPrice = priceCalculator.calculateItemPrice(0);

    expect(itemPrice).toBe(135.375);
  });

  it('should calculate total price with shipping', () => {
    priceCalculator.items = [
      { price: 10, quantity: 5, discount: 1 },
      { price: 20, quantity: 3, discount: 1 },
    ];

    const totalPrice = priceCalculator.calculateTotalPrice();

    expect(totalPrice).toBe(130);
  });

  it('should calculate total price with free shipping', () => {
    priceCalculator.items = [
      { price: 10, quantity: 30, discount: 0.95 },
      { price: 20, quantity: 3, discount: 1 },
    ];

    const totalPrice = priceCalculator.calculateTotalPrice();

    expect(totalPrice).toBe(330.75);
  });
});