// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// https://www.w3schools.com/js/js_functions.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
describe('functions', () => {
  test.skip('define a custom function called "myFunc"', () => {
    // A JavaScript function is defined with the keyword "function" 
    // followed by a custom name you pick "someCustomName"
    // then followed by parentheses "()""
    // and then followed by curly brackets "{}""
    
    // expect(myFunc instanceof Function).toBe(true)
  });

  test.skip('assign a function to a variable called myCustomFunction', () => {
    // functions can also be assigned to variables
    // since this function is contained in a variable you could optionally not name it
    // An unnamed function is called an anonymous function
    
    // expect(myCustomFunction instanceof Function).toBe(true)
  });

  test.skip('define a function with the "arrow function" shorthand', () => {
    // functions assigned to variables can also be define with a shorthand syntax call arrows function 
    // this follows the pattern const myVar = () => {} 
    // note the equal-greater than symbols between the parentheses and curly brackets looks like an arrow
    
    // expect(myCustomFunction instanceof Function).toBe(true)
  });

  test.skip('can invoke(call) the function myCustomFunction 4 times', () => {
    // The code inside the function's curly brackets will execute when "something" invokes (calls) the function
    // to call a function simply type the functions name followed by parentheses "()"
    const myCustomFunction = jest.fn();

    expect(myCustomFunction).toBeCalledTimes(4);
  });

  test.skip('modify myCustomFunction so that it returns a value of 42', () => {
    // functions not only can execute code but return a value from the execute code
    // this is done by using the keyword "return" followed by the value you want to return
    // *note the function will stop executing code when it reaches a return statement
    // this mean code after the return statement will never run 
    
    const myCustomFunction = () => {

    }

    expect(myCustomFunction()).toBe(42)
  });

  test.skip('pass an argument to a function myCustomFunction and have it return that value', () => {
    // functions can accept any number of input. These inputs a.k.a parameters can be defined within the parentheses of the function declaration separated by a comma "," 
    // example: function myFunc(parameter1, parameter2, ...etc) {}
    // these parameters act like variables that will contain the data passed to the function
    // You can pass data to a function when calling the function
    // example: myFunc(22, 'John Doe')
    // data passed to a function is known as an argument and can be any valid javascript type: 'string', number, boolean, array, object, and even another function

    function myCustomFunction() {}

    // expect(myCustomFunction(333)).toBe(333)
  })

  test.skip('addFunc can add 1 and 2 to get a return value of 3', () => {
    // create a function called addFunc that has two parameters called num1 and num2
    // then have that function return that value of num1 plus num2

    //expect(addFunc(1, 2)).toBe(3)
  })

  test.skip('addFunc can add numbers', () => {
    // create the same function over again but this time supply the function different arguments to return a value of 12

    // expect(addFunc(?, ?)).toBe(12)
  })
});
