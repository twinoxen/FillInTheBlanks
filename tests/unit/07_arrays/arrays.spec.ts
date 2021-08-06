// JavaScript arrays are used to store multiple values in a single variable.
// https://www.w3schools.com/js/js_arrays.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
describe('arrays', () => {
  test.skip('there is an array with 5 values', () => {
    // an array can be a collection of any valid JS type (string, number, boolean, function, object, another nested array, etc...)
    // even though JS allows you to have an array of mixed types, you wouldn't typically mix types in an array
    // but sometimes this is unavoidable

    const myArr = null;

    expect(myArr.length).toBe(5);
    // * notice arrays have a property "length" which is would to see the count of items in that array
  });

  test.skip('there is an array of 5 names and you can access the 4th item', () => {
    const myArr = null;

    expect(myArr.length).toBe(5);

    // Items in an array can be accessed by using the array variable name followed square brackets containing the index of that item
    // *note the index begins at 0
    // access the 4th item your names array(myArr) and make sure that values matches the toBe() value

    // expect().toBe('Reginald')
  });

  test.skip('change the 3rd items value', () => {
    // not only can array items be accessed by using that items index but you can also reassign that index value to a new value
    const pizzaToppings = ['cheese', 'pineapple', 'pepperoni', 'mushrooms'];

    expect(pizzaToppings[2]).toBe('ham');
  });

  test.skip('delete a value from an array', () => {
    // you can use the "delete" keyword followed by the array[index]
    // delete mushrooms from this array
    // note* deleting values this way does not change the shape (size) of the array
    const pizzaToppings = ['cheese', 'pineapple', 'pepperoni', 'mushrooms'];

    // expect(pizzaToppings.length).toBe(); // what length will the pizzaToppings array have?
    // expect(pizzaToppings[3]).toBe(); // what value will the last index have/
  });

  test.skip('its popping (arr.pop() method)', () => {
    const myArr = ['Peter', 'Paul', 'Mary', 'Zoboomafoo'];

    // expect(myArr.pop()).toBe() // What value will pop() return?
  });

  test.skip('its shifty (arr.shift() method)', () => {
    const myArr = ['Peter', 'Paul', 'Mary', 'Zoboomafoo'];

    // expect(myArr.shift()).toBe() // What value will shift() return?
  });

  test.skip('Ahhh push it! (arr.push() method)', () => {
    // use the push method to add a new value to the myArr array
    const myArr = ['Peter', 'Paul', 'Mary', 'Zoboomafoo'];

    // expect(myArr.length).toBe() // What length will myArr array have?
  });

  // splice
  // slice
  // join
  // filter
  // map
  // find
  // findIndex
  // reduce
  // flat map
  // some
  // every

  // remove a specific item
});
