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
    
    // const pizzaToppings = ['cheese', 'pineapple', 'pepperoni', 'mushrooms'];

    // expect(pizzaToppings[2]).toBe('ham');
  });

  test.skip('delete a value from an array', () => {
    // you can use the "delete" keyword followed by the array[index]
    // delete mushrooms from this array
    // note* deleting values this way does not change the shape (size) of the array
    
    // const pizzaToppings = ['cheese', 'pineapple', 'pepperoni', 'mushrooms'];

    // expect(pizzaToppings.length).toBe(); // what length will the pizzaToppings array have?
    // expect(pizzaToppings[3]).toBe(); // what value will the last index have/
  });

  test.skip('its popping (arr.pop() method)', () => {
    // const myArr = ['Peter', 'Paul', 'Mary', 'Zoboomafoo'];

    // expect(myArr.pop()).toBe() // What value will pop() return?
  });

  test.skip('its shifty (arr.shift() method)', () => {
    // const myArr = ['Peter', 'Paul', 'Mary', 'Zoboomafoo'];

    // expect(myArr.shift()).toBe() // What value will shift() return?
  });

  test.skip('Ahhh push it! (arr.push() method)', () => {
    // use the push method to add a new value to the myArr array
    
    // const myArr = ['Peter', 'Paul', 'Mary', 'Zoboomafoo'];

    // expect(myArr.length).toBe() // What length will myArr array have?
  });

  test.skip("splice this array more than a GMO's DNA (arr.splice() method)", () => {
    // read documentation on the array.splice method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // splice can add an item to a specific index
    // splice can also remove items or replace items
    // splice modifications do change the array's shape (a.k.a size)
    const myArr = ['Peter', 'Paul', 'Mary', 'Zoboomafoo'];

    // With use splice method for all expects in this test
    // add Scooby to the 3rd index
    expect(myArr[2]).toBe('Scooby')
    
    // Mary doesn't approve of the trans community 
    // remove Mary from the group
    expect(myArr.some(item => item === 'Mary')).toBe(false)

    // Scooby is missing his buddy Shaggy
    // Scooby also keeps chasing the lemur and there is no peace
    // swap Zoboomafoo for Shaggy
    expect(myArr.some(item => item === 'Shaggy')).toBe(true)
    expect(myArr.some(item => item === 'Zoboomafoo')).toBe(false)
  });

  it.skip('can merge 2 arrays together (arr.concat() method)', () => {
    // read documentation on array.concat method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // concat will merge to groups together
    // hint: concat does not modify existing array but returns a new array

    // const arr1 = ['chocolate', 'left twix', 'top oreo']
    // const arr2 = ['peanut butter', 'right twix', 'bottom oreo']
    // const mergeArr = null

    // expect(mergeArr.length).toBe(6)
  })

  it.skip('can join an array into a string', () => {
    // read documentation on array.join method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    // join will combine each item in an array into
    // join method accepts 1 argument that will be the "glue" between each array item

    // const arr = ['quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

    // expect().toBe('quick brown fox jumps over the lazy dog')
    // expect().toBe('quick, brown, fox, jumps, over, the, lazy, dog')
  })

  it.skip('can find items that match a pattern', () => {
    // read documentation on array.find method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // find will return the first value that matches a pattern that you provide
    // if no item matches than it will return undefined

    // const arr = [0.345, 1.49495, 0.9486, 1.3945]

    // use find to return the first number greater than 1
    // expect().toBe('')

    // use find to return the first number greater than 10
    // expect().toBe(undefined)
  })
  

  // filter
  // map
  // reduce
  
  // some
  // every

  // Homework
  // explain the difference between array.slice() and array.splice() method
  // Why would you use one over the other? 
  //
  // explain the difference between array.find() and array.findIndex method
  // Why would you use one over the other? 
});
