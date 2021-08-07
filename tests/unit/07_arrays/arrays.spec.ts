// This test is self contained and does not require external files / modules

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

  it.skip('can join an array into a string (arr.join() method)', () => {
    // read documentation on array.join method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    // join will combine each item in an array into
    // join method accepts 1 argument that will be the "glue" between each array item

    // const arr = ['quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

    // expect().toBe('quick brown fox jumps over the lazy dog')
    // expect().toBe('quick, brown, fox, jumps, over, the, lazy, dog')
  })

  // *DEMO before completing test
  it.skip('can find items that match a pattern (arr.find() method)', () => {
    // read documentation on array.find method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // find will return the first value that matches a condition you provide it
    // find accepts 1 argument that is a function that contains the condition
    // if the condition returns true, the condition has been meet and will return that item
    // if no item matches that condition than it will return undefined

    // const arr = [0.345, 1.49495, 0.9486, 1.3945]

    // use find to return the first number greater than 1
    // expect().toBe('')

    // use find to return the first number greater than 10
    // expect().toBe(undefined)
  })
  

  // *note: filter, map, and reduce are heavily used in most programming applications
  // *DEMO before completing test
  it.skip('can filter (arr.filter() method)', () => {
    // read documentation on array.filter method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // filter will return a new array with items that only match a given condition
    // filter accepts 1 argument that is a function that contains the condition
    // if the condition returns true that item will remain in the new array
    // if the condition returns false that item will be removed from the new array

    // const arr1 = [1, 2, 3, 4, 5]

    // use the filter method to only return numbers less than or equal to 3
    // expect().toEqual([1, 2, 3])

    // use the filter method to only return numbers greater than or equal to 3
    // expect().toEqual([3, 4, 5])

    // use filter to have an array that only has apples
    const arr2 = ['apple', 'orange', 'apple', 'orange', 'apple', 'orange', 'apple']
    
    expect(arr2.every(item => item === 'apple')).toBe(true)
  })

  // *DEMO before completing test
  it.skip('can map values (arr.map() method)', () => {
    // read documentation on array.map method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // map can apply modifications to each item in an array
    // map will not modify the original array but return a new array with the modified items
    // map accepts 1 argument that is a function. this function will run for every item in the array
    // the return value of the function will be the new modified value in the new array 

    // const arr1 = [1, 2, 3, 4]

    // use map to multiply 10 to every item in the arr1 array
    // expect().toEqual([10, 20, 30, 40])

    // use map to uppercase all the values in arr2
    // hint: we've done this before in string.spec.ts // https://www.w3schools.com/jsref/jsref_touppercase.asp
    // const arr2 = ['jim', 'sarah', 'fred', 'pete']
    // expect().toEqual(['JIM', 'SARAH', 'FRED', 'PETE'])
  })


  // *DEMO before completing test
  it('can chain filter and map methods to to modify an array', () => {
    // any array method that returns an array can be chained with another 
    // method to do multiple modifications to the items in the array
    // in fact this is 1 of bases for function programming

    // const arr1 = ['reginald', 'duke', 'bernard', 'franco', 'james']

    // There's a royal party happening and all the lords and ladies of the land have been invited.
    // Each person that arrives must be verified and announced.
    // The first group to arrive is a group of gentlemen.
    //
    // chain filter and map methods accomplish the follows rules
    // 1. duke has has lied about his status and is just a peasant poop smith. He must be removed from the party
    // 2. since we are announcing the gentlemen each person name needs to be uppercase
    // 3. before each name we need to address the gentlemen as "Sir" followed by their name

    // expect().toEqual(['Sir REGINALD', 'Sir BERNARD', 'Sir FRANCO', 'Sir JAMES'])
  })
  // chaining
  
  /* =============== */
  /*     Homework    */
  /* =============== */
  
  // explain the difference between array.slice() and array.splice() method
  // Why would you use one over the other? 
  //
  // explain the difference between array.find() and array.findIndex method
  // Why would you use one over the other? 
  
  // Creat a test for the following methods
  // array.reverse // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  // array.sort    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // array.some    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  // array.every   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

  // Extra Credit 
  // array.reduce  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  // this can be a little complex if you are having a hard time we can address this in the advanced section later

});
