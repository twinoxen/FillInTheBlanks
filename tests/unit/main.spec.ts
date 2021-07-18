import * as main from '../../src/main'

describe('main.ts', () => {
  test('does pineapple belong on pizza?', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    main.logPizzaPreference()

    expect(consoleSpy).toHaveBeenCalledWith('🍍 belongs on 🍕');
  });
});
