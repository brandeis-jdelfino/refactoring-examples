const { print_temp_stats } = require('./original');

describe('print_temp_stats', () => {
  let emittedMessages;

  beforeEach(() => {
    emittedMessages = [];
  });

  const emit = (message) => {
    emittedMessages.push(message);
  };

  // Not really possible to test original version!
  it('needs one test case to avoid an error', () => { });

  /*
  it('should print temperature in Celsius and emit "It\'s really hot!" if temperature is above 37°C', () => {
    const tempFahrenheit = 100;

    print_temp_stats(tempFahrenheit, emit);

    expect(emittedMessages).toEqual(["Temperature is: 37.77777777777778C", "It's really hot!"]);
  });

  it('should print temperature in Celsius and emit "It\'s really cold!" if temperature is below 10°C', () => {
    const tempFahrenheit = 0;

    print_temp_stats(tempFahrenheit, emit);

    expect(emittedMessages).toEqual(["Temperature is: -17.77777777777778C", "It's really cold!"]);
  });

  it('should print temperature in Celsius and emit "It\'s moderate!" if temperature is between 10°C and 37°C', () => {
    const tempFahrenheit = 25;

    print_temp_stats(tempFahrenheit, emit);

    expect(emittedMessages).toEqual(["Temperature is: -3.888888888888889C", "It's moderate!"]);
  });
  */
});