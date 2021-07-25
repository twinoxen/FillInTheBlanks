import * as myStrFuncs from '../../../src/string';

// In any computer programming language, a string is a sequence of characters used to represent text.
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
describe('myStrFuncs.ts string functions', () => {
  it('returns a string of a pizza topping', () => {
     expect(myStrFuncs.getPizzaTopping()).toBe('pepperoni');
  });

  it('console logs a string about pizza toppings', () => {
    const consoleSpy = jest.spyOn(console, 'log');

     myStrFuncs.log(myStrFuncs.getPizzaTopping()) // *note the use of an argument

    expect(consoleSpy).toHaveBeenCalledWith('pepperoni');
  });

  it('logs a loud topping', () => {
    const consoleSpy = jest.spyOn(console, 'log');

     myStrFuncs.log(myStrFuncs.yell(myStrFuncs.getPizzaTopping()))

    expect(consoleSpy).toHaveBeenCalledWith('PEPPERONI');
  });

  it('logs a loud topping with some fluff(whitespace)', () => {
    const consoleSpy = jest.spyOn(console, 'log');

     myStrFuncs.log(myStrFuncs.addWhiteSpace(myStrFuncs.yell(myStrFuncs.getPizzaTopping())))

    expect(consoleSpy).toHaveBeenCalledWith(' PEPPERONI ');
  });

  it('ok now take out the fluff (customer always get what they want 🤷‍♂️)', () => {
    // hint: use the trim function
    const consoleSpy = jest.spyOn(console, 'log');

     myStrFuncs.log(myStrFuncs.removeWhiteSpace(myStrFuncs.addWhiteSpace(myStrFuncs.yell(myStrFuncs.getPizzaTopping()))))

    expect(consoleSpy).toHaveBeenCalledWith('PEPPERONI');
  });

  it('replaces a pepperoni for ham', () => {
    const consoleSpy = jest.spyOn(console, 'log');

     myStrFuncs.log(myStrFuncs.switchToppings(myStrFuncs.getPizzaTopping(), 'ham'))

    expect(consoleSpy).toHaveBeenCalledWith('ham');
  });

  test('does pepperoni have pepper?', () => {
    // hint: use includes function
         expect(myStrFuncs.has('pepper', myStrFuncs.getPizzaTopping())).toBe(true);
  })


  // Read documentation for the following native string functions and write me a test for each
  // indexOf
  // match
  // slice
  // split
});
