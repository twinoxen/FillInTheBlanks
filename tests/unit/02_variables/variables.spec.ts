/* eslint-disable prefer-const */
/* eslint-disable no-constant-condition */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
// @ts-nocheck

// Variables are containers for storing data (values).
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
// https://www.w3schools.com/js/js_variables.asp
describe('variables and scope', () => {
  describe('var', () => {
    test.skip('var is scope to the nearest function', () => {
      // including this function
      for (var i = 0; i < 3; i++) {
        console.log('hello');
      }

      // expect(i).toBe() // what value will variable "i" have?
    });

    test.skip('another var scope test', () => {
      if (true) {
        var i = 'test';
      }

      // expect(i).toBe() // what value will variable "i" have?
    });

    test.skip('var can be redeclared', () => {
      var myVar = 'dog';
      var myVar = 234;

      // expect(myVar).toBe() // what value will variable "myVar" have? Why would reassigning a var be bad?
    });

    test.skip('var variables are hoisted to the top of the function on runtime with an undefined value', () => {
      expect(myVar).toBe('dog');
      var myVar = 'dog';
    });

    // at this point var should be avoided and let and const should be used instead
  });

  describe('let', () => {
    test.skip('let is scope to the nearest block aka "{}"', () => {
      for (let i = 0; i < 3; i++) {
        // a for loop is a block
        console.log('hello');
      }

      // expect(i).toBe() // what value will variable "i" have?
    });

    test.skip('another let scope test', () => {
      if (true) {
        // an if condition is a block
        let i = 'test';
      }

      // expect(i).toBe() // what value will variable "i" have?
    });

    test.skip('let cannot be redeclared but its value can be swapped', () => {
      // let myVar = 'dog';
      // let myVar = 234
      // expect(myVar).toBe(234) // without declaring myVar, set its value to make the test pass
    });

    test.skip('let variables are hoisted to the top of the block scope but are un initialized', () => {
      expect(myVar).toBe('dog');
      let myVar = 'dog';
    });

    // thought let is better than var it can be dangerous to reuse / reassign (swap) a variable again for a different purpose
    // preferably you would want to see more const variables than anything but there are definitely times to use let 
  });

  describe('const', () => {
    test.skip('const is scope to the nearest block aka "{}"', () => {
      if (true) {
        const name = 'Joe';
      }

      expect(name).toBe('Joe');
    });

    test.skip('const can not be redeclared and its value cannot be swapped', () => {
      // const name = 'Joe';
      // const name = 'Jane'

      // expect(name).toBe('Jane')
    });
  });
});
