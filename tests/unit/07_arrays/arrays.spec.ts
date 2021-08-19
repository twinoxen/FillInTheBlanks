// This test is self contained and does not require external files / modules

import { isTemplateExpression } from "typescript";

// JavaScript arrays are used to store multiple values in a single variable.
// https://www.w3schools.com/js/js_arrays.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
describe("arrays", () => {
  test("there is an array with 5 values", () => {
    // an array can be a collection of any valid JS type (string, number, boolean, function, object, another nested array, etc...)
    // even though JS allows you to have an array of mixed types, you wouldn't typically mix types in an array
    // but sometimes this is unavoidable

    const myArr = [true, false, true, false, true];

    expect(myArr.length).toBe(5);
    // * notice arrays have a property "length" which is would to see the count of items in that array
  });

  test("there is an array of 5 names and you can access the 4th item", () => {
    const myArr = [true, false, true, "Reginald", true];

    expect(myArr.length).toBe(5);

    // Items in an array can be accessed by using the array variable name followed square brackets containing the index of that item
    // *note the index begins at 0
    // access the 4th item your names array(myArr) and make sure that values matches the toBe() value

    expect(myArr[3]).toBe("Reginald");
  });

  test("change the 3rd items value", () => {
    // not only can array items be accessed by using that items index but you can also reassign that index value to a new value
    const pizzaToppings = ["cheese", "pineapple", "ham", "mushrooms"];
    expect(pizzaToppings[2]).toBe("ham");
  });

  test("delete a value from an array", () => {
    // you can use the "delete" keyword followed by the array[index]
    // delete mushrooms from this array
    // note* deleting values this way does not change the shape (size) of the array
    const pizzaToppings = ["cheese", "pineapple", "pepperoni", "mushrooms"];
    delete pizzaToppings[3];
    expect(pizzaToppings.length).toBe(4); // what length will the pizzaToppings array have?
    expect(pizzaToppings[3]).toBe(undefined); // what value will the last index have/
  });

  test("its popping (arr.pop() method)", () => {
    const myArr = ["Peter", "Paul", "Mary", "Zoboomafoo"];
    expect(myArr.pop()).toBe("Zoboomafoo"); // What value will pop() return?
    expect(myArr.pop()).toBe("Mary");
  });

  test("its shifty (arr.shift() method)", () => {
    const myArr = ["Peter", "Paul", "Mary", "Zoboomafoo"];
    expect(myArr.shift()).toBe("Peter"); // What value will shift() return?
    expect(myArr.shift()).toBe("Paul");
  });

  test("Ahhh push it! (arr.push() method)", () => {
    // use the push method to add a new value to the myArr array
    const myArr = ["Peter", "Paul", "Mary", "Zoboomafoo"];
    myArr.push("& You!");
    expect(myArr.length).toBe(5); // What length will myArr array have?
  });

  test("splice this array more than a GMO's DNA (arr.splice() method)", () => {
    // read documentation on the array.splice method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // splice can add an item to a specific index
    // splice can also remove items or replace items
    // splice modifications do change the array's shape (a.k.a size)

    const myArr = ["Peter", "Paul", "Mary", "Zoboomafoo"];
    myArr.splice(2, 0, "Scooby");

    // With use splice method for all expects in this test
    // add Scooby to the 3rd index
    expect(myArr[2]).toBe("Scooby");
    myArr.splice(3, 1);

    // Mary doesn't approve of the trans community
    // remove Mary from the group
    expect(myArr.some((item) => item === "Mary")).toBe(false);

    // Scooby is missing his buddy Shaggy
    // Scooby also keeps chasing the lemur and there is no peace
    // swap Zoboomafoo for Shaggy
    myArr.splice(3, 1, "Shaggy");
    expect(myArr.some((item) => item === "Shaggy")).toBe(true);
    expect(myArr.some((item) => item === "Zoboomafoo")).toBe(false);
  });

  it("can merge 2 arrays together (arr.concat() method)", () => {
    // read documentation on array.concat method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // concat will merge two groups together
    // hint: concat does not modify existing array but returns a new array
    const arr1 = ["chocolate", "left twix", "top oreo"];
    const arr2 = ["peanut butter", "right twix", "bottom oreo"];
    const mergeArr = arr1.concat(arr2);
    expect(mergeArr.length).toBe(6);
  });

  it("can join an array into a string (arr.join() method)", () => {
    // read documentation on array.join method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    // join will combine each item in an array into
    // join method accepts 1 argument that will be the "glue" between each array item
    const arr = [
      "quick",
      "brown",
      "fox",
      "jumps",
      "over",
      "the",
      "lazy",
      "dog",
    ];
    expect(arr.join(" ")).toBe("quick brown fox jumps over the lazy dog");
    expect(arr.join(", ")).toBe(
      "quick, brown, fox, jumps, over, the, lazy, dog"
    );
  });

  // *DEMO before completing test
  it("can find items that match a pattern (arr.find() method)", () => {
    // read documentation on array.find method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // find will return the first value that matches a condition you provide it
    // find accepts 1 argument that is a function that contains the condition
    // if the condition returns true, the condition has been meet and will return that item
    // if no item matches that condition than it will return undefined
    const arr = [0.345, 1.49495, 0.9486, 1.3945];
    // use find to return the first number greater than 1
    const found = arr.find((item) => item > 1);

    expect(found).toBe(1.49495);

    // use find to return the first number greater than 10
    const unfound = arr.find((item) => item > 10);
    expect(unfound).toBe(undefined);
  });

  // *note: filter, map, and reduce are heavily used in most programming applications
  // *DEMO before completing test
  it("can filter (arr.filter() method)", () => {
    // read documentation on array.filter method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // filter will return a new array with items that only match a given condition
    // filter accepts 1 argument that is a function that contains the condition
    // if the condition returns true that item will remain in the new array
    // if the condition returns false that item will be removed from the new array

    const arr1 = [1, 2, 3, 4, 5];
    const arr1new = arr1.filter((item) => item <= 3);
    const arr1newnew = arr1.filter((item) => item >= 3);
    // use the filter method to only return numbers less than or equal to 3
    expect(arr1new).toEqual([1, 2, 3]);

    // use the filter method to only return numbers greater than or equal to 3
    expect(arr1newnew).toEqual([3, 4, 5]);

    // use filter to have an array that only has apples
    const arr2 = [
      "apple",
      "orange",
      "apple",
      "orange",
      "apple",
      "orange",
      "apple",
    ];
    const arr2new = arr2.filter((item) => item === "apple");
    expect(arr2new.every((item) => item === "apple")).toBe(true);
  });

  // *DEMO before completing test
  it("can map values (arr.map() method)", () => {
    // read documentation on array.map method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // map can apply modifications to each item in an array
    // map will not modify the original array but return a new array with the modified items
    // map accepts 1 argument that is a function. this function will run for every item in the array
    // the return value of the function will be the new modified value in the new array

    const arr1 = [1, 2, 3, 4];
    const itemsmultipliedby10 = arr1.map((item) => item * 10);
    // use map to multiply 10 to every item in the arr1 array
    expect(itemsmultipliedby10).toEqual([10, 20, 30, 40]);

    // use map to uppercase all the values in arr2
    // hint: we've done this before in string.spec.ts // https://www.w3schools.com/jsref/jsref_touppercase.asp

    const arr2 = ["jim", "sarah", "fred", "pete"];
    const itemsuppercased = arr2.map((item) => item.toUpperCase());

    expect(itemsuppercased).toEqual(["JIM", "SARAH", "FRED", "PETE"]);
  });

  // *DEMO before completing test
  it("can chain filter and map methods to to modify an array", () => {
    // any array method that returns an array can be chained with another
    // method to do multiple modifications to the items in the array
    // in fact this is 1 of bases for function programming
    const arr1 = ["reginald", "duke", "bernard", "franco", "james"];
    // There's a royal party happening and all the lords and ladies of the land have been invited.
    // Each person that arrives must be verified and announced.
    // The first group to arrive is a group of gentlemen.
    //
    // chain filter and map methods accomplish the follows rules
    const partypeople = arr1
      .filter((item) => item !== "duke")
      .map((item) => item.toUpperCase())
      .map((item) => "Sir " + item);
    // 1. duke has has lied about his status and is just a peasant poop smith. He must be removed from the party
    // 2. since we are announcing the gentlemen each person name needs to be uppercase
    // 3. before each name we need to address the gentlemen as "Sir" followed by their name
    expect(partypeople).toEqual([
      "Sir REGINALD",
      "Sir BERNARD",
      "Sir FRANCO",
      "Sir JAMES",
    ]);
  });

  /* =============== */
  /*     Homework    */
  /* =============== */

  // explain the difference between array.slice() and array.splice() method
  // Why would you use one over the other?

  // - Splice modifies the array - slice does not. Splice replaces/removes existing elements and can add new elements in place. Slice returns a portion of an array determined by start/end
  // - paramenters. If you want to reuse an array you would use slice over slice.

  // explain the difference between array.find() and array.findIndex method
  // Why would you use one over the other?

  //  - array.find will return the VALUE of the first element that passes the test, while array.findIndex will return the POSITION in the array of a given value. If you
  // are looking for the layout of the array, use findIndex, while find will give you the datapoint.

  // Creat a test for the following methods
  // array.reverse // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

  it("can reverse an array (arr.reverse() method)", () => {
    const arr1 = ["PETE", "FRED", "SARAH", "JIM"];
    const arr1reverse = arr1.reverse();
    expect(arr1reverse).toEqual(["JIM", "SARAH", "FRED", "PETE"]);
  });

  // array.sort    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  it("can sort an array (arr.sort() method)", () => {
    const arr1 = [1, 40, 42, 69, 420, 3];
    const arr1sort = arr1.sort();
    expect(arr1sort).toEqual([1, 3, 40, 42, 420, 69]);
  });
  // array.some    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

  it("can test for at least one element in an array will pass a test(arr.some() method))", () => {
    const arr1 = [1, 2, 3, 4, 5];

    expect(arr1.some((item) => item === 1)).toEqual(true);
  });

  // I want to look at more examples of this because I am not sure I fully understand line 256 - jf

  // array.every   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  it("can test whether all elements in a given array pass the test(arr.every() metohod))", () => {
    const arr1 = [1, 2, 3];

    expect(arr1.every((item) => item < 4)).toEqual(true);
  });

  // Extra Credit
  // array.reduce  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  // this can be a little complex if you are having a hard time we can address this in the advanced section later

  // total sum of all numbers

  it("can give the total sum of all numbers in an array(arry.reduce() method))", () => {
    const arr1 = [20, 22];
    expect(arr1.reduce((acc, curr) => acc + curr)).toEqual(42);
  });
});
