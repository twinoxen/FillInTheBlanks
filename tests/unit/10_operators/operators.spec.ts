/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

// https://www.w3schools.com/js/js_operators.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
describe('operators', () => {
  it.skip('assignment operators', () => {
    // Use the following assignment operators to pass the tests
    // There is no need to create new variables use the assignment operator 
    // inside the expect statement example
    // expect(myStrVar = 'new value').toBe('new value')
    // expect(myNumVar += 55).toBe(110)

    let pet = null;
    let numberOfCats = 5;
    let problems = 99
    let gokuPowerLevel = 9
    let carolineGoldenCalculator = 99
    let neverGetsPickedForDodgeBall = 9
    let exponentialExpansion = 9

    /* Assignment operator "="                  */ expect(pet).toBe('cat');
    /* Addition Assignment operator "+="        */ expect(numberOfCats).toBe(9);
    /* Subtraction Assignment operator "-="     */ expect(problems).toBe(0);
    /* Multiplication Assignment operator "*="  */ expect(gokuPowerLevel).toBe(9000);
    /* Division Assignment operator "/="        */ expect(carolineGoldenCalculator).toBe(33);
    /* Remainder Assignment operator "%="       */ expect(neverGetsPickedForDodgeBall).toBe(1);
    /* Exponentiation Assignment operator "**=" */ expect(exponentialExpansion).toBe(81);
  });

  it.skip('chaining assignment operators', () => {
    // it is possible to chain multiple assignment operators together to get a desired result.
    // with can be a short hand way to manipulate values
    // example
    // a = b = c = 2 is the same as a = 1, b = 1, c = 1
    // d = a += b *= c is the same as a + b * c

    let x = 2
    let y = 3
    let z = 4
    let a = 0

    // translate the following sentence into chained assignment operators
    // a equals plus x times y minus z
    expect(a /* chained operators here */).toBe(-2)

    /* Extra credit */
    // What do you think the value of x, y, z will be now?
    // remember even in combination with other math symbols "=" is still assigning
    // expect(x).toBe()
    // expect(y).toBe()
    // expect(z).toBe()
  });

  it.skip('comparison operators', () => {
    // use the following comparison operators to pass the tests
    // you can write the comparison directly in the expect
    // Example 
    // expect(1 == 1).toBe(true)
    
    /* equal "=="             */ expect(false).toBe(true)   // number 3 to equal string '3'
    /* not equal "!="         */ expect(false).toBe(true)   // 3 to not equal 9
    /* strict equal "==="     */ expect(false).toBe(false)  // number 3 to strictly equal '3'
    /* strict not equal "!==" */ expect(false).toBe(true)   // number 3 to not strictly equal '3'
    /* greater than ">"       */ expect(false).toBe(true)   // number 3 to be greater than 1  
    /* greater than ">="      */ expect(false).toBe(true)   // number 3 to be greater than or equal to 3  
    /* less then "<"          */ expect(false).toBe(true)   // number 3 to be less then 9
    /* less then "<="         */ expect(false).toBe(true)   // number 3 to be less then or equal to 3
  });

  it.skip('arithmetic operators', () => {
    // use the following arithmetic operators to get the test to pass
    // we will skip + (plus), - (minus), / (divide), * (multiple), ** (exponent) operators since we used these in the number test

    let a = 1
    let b = 10

    /* Remainder (a.k.a modulo)  "%"         */ expect(false).toBe(2)   // 12 divided by 5 should have a remainder of 2
    /* Increment (a.k.a increase by 1)  "++" */ expect(a).toBe(2)   // value of a plus 1
    /* Decrement (a.k.a decrease by 1)  "--" */ expect(b).toBe(9)   // value of b minus 1
    /* negative number  "-"                  */ expect(b).toBe(-9)   // negative values of b *note this one goes before the variable
  });

  it.skip('logical operators', () => {
    // its called logic because it makes since
    // logical operators read like english conjunctions AND, OR
    // fill in the toBe() method with the expected out come of 
    // the following expects containing logical operators
    // https://www.sitepoint.com/javascript-truthy-falsy/

    // expect(true && true).toBe()
    // expect(false && true).toBe()
    // expect(true && false).toBe()
    
    // expect(true || false).toBe()
    // expect(false || true).toBe()
    // expect(true || false).toBe()

    /* Extra credit */
    // Truthy and Falsy 
    // values other than "true" or "false" can have a "true" (truthy) or "false" (falsy) value
    // example 'my string' would have a truthy since it does represent a value of something
    
    // values that are falsy can be:
    // false
    // 0 (zero)
    // -0 (minus zero)
    // '', "", `` (empty string)
    // null
    // undefined
    // NaN

    // values that are truthy are any value NOT a falsy but also can include:
    // '0' (a string containing a single zero)
    // 'false' (a string containing the text “false”)
    // [] (an empty array)
    // {} (an empty object)
    // function(){} (an “empty” function)

    // knowing this information what do you think the following expects will be?
    // add toBeTruthy() or toBeFalsy() methods to the end of the following expect statements to pass the test
    
    // expect(true)
    // expect('false')
    // expect(true && 'sheep')
    // expect(300)

    // expect(NaN)
    // expect(0)
    // expect('')
    // expect(false)
    // expect(10000 && false)
  });

  // DEM0 first
  it.skip('ternary', () => {
    // ternaries can be used as a short hand to if else statements
    // rewrite the following if statements into ternary notation    
    // example
    // a = true ? 'yep' : 'no'

    let a 
    if(1 < 2) {
      a = 'lesser'
    } else {
      a = 'greater'
    }

    let b
    if(a === 'greater') {
      b = 'big number'
    } else {
      b = 'small number'
    }

    let c
    if(b) {
      c = 'there was a truthy'
    } else {
      c = 'there was a falsy'
    }

    expect(a).toBe('greater')
    expect(b).toBe('small number')
    expect(c).toBe('small number')
  });
});
