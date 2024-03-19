const process = require('./original');

describe("process", () => {
  it("should return an array with items that have a value less than or equal to the limit", () => {
    const items = [
      { value: 5 },
      { value: 10 },
      { value: 15 },
      { value: 20 },
      { value: 25 },
    ];
    const limit = 15;
    const result = process(items, limit);
    expect(result).toEqual([
      { value: 5 },
      { value: 10 },
      { value: 15 },
    ]);
  });

  it("should return an empty array if no items have a value less than or equal to the limit", () => {
    const items = [
      { value: 20 },
      { value: 25 },
      { value: 30 },
      { value: 35 },
      { value: 40 },
    ];
    const limit = 15;
    const result = process(items, limit);
    expect(result).toEqual([]);
  });

  it("should return an empty array if the input items array is empty", () => {
    const items = [];
    const limit = 15;
    const result = process(items, limit);
    expect(result).toEqual([]);
  });
});