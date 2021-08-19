/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
// @ts-nocheck

// https://www.w3schools.com/js/js_operators.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
describe("operators", () => {
  it("assignment operators", () => {
    // Use the following assignment operators to pass the tests
    // There is no need to create new variables use the assignment operator
    // inside the expect statement example
    // expect(myStrVar = 'new value').toBe('new value')
    // expect(myNumVar += 55).toBe(110)

    let pet = null;
    let numberOfCats = 5;
    let problems = 99;
    let gokuPowerLevel = 9;
    let carolineGoldenCalculator = 99;
    let neverGetsPickedForDodgeBall = 9;
    let exponentialExpansion = 9;

    /* Assignment operator "="                  */ expect((pet = "cat")).toBe(
      "cat"
    );
    /* Addition Assignment operator "+="        */ expect(
      (numberOfCats += 4)
    ).toBe(9);
    /* Subtraction Assignment operator "-="     */ expect(
      (problems -= 99)
    ).toBe(0);
    /* Multiplication Assignment operator "*="  */ expect(
      (gokuPowerLevel *= 1000)
    ).toBe(9000);
    /* Division Assignment operator "/="        */ expect(
      (carolineGoldenCalculator /= 3)
    ).toBe(33);
    /* Remainder Assignment operator "%="       */ expect(
      (neverGetsPickedForDodgeBall %= 8)
    ).toBe(1);
    /* Exponentiation Assignment operator "**=" */ expect(
      (exponentialExpansion **= 2)
    ).toBe(81);
  });

  it("chaining assignment operators", () => {
    // it is possible to chain multiple assignment operators together to get a desired result.
    // with can be a short hand way to manipulate values
    // example
    // a = b = c = 1 is the same as a = 1, b = 1, c = 1
    // d = a += b *= c is the same as a + b * c = d

    let x = 2;
    let y = 3;
    let z = 4;
    let a = 0;

    // translate the following sentence into chained assignment operators
    // a plus x times y minus z
    expect((a += x *= y -= z) /* chained operators here */).toBe(-2);

    /* Extra credit */
    // What do you think the value of x, y, z will be now?
    // remember even in combination with other math symbols "=" is still assigning
    expect(x).toBe(-2);
    expect(y).toBe(-1);
    expect(z).toBe(4);
  });

  it("comparison operators", () => {
    // use the following comparison operators to pass the tests
    // you can write the comparison directly in the expect
    // Example
    // expect(1 == 1).toBe(true)

    /* equal "=="             */ expect(3 == "3").toBe(true); // number 3 to equal string '3'
    /* not equal "!="         */ expect(3 != 9).toBe(true); // 3 to not equal 9
    /* strict equal "==="     */ expect(3 === "3").toBe(false); // number 3 to strictly equal '3'
    /* strict not equal "!==" */ expect(3 !== "3").toBe(true); // number 3 to not strictly equal '3'
    /* greater than ">"       */ expect(3 > 1).toBe(true); // number 3 to be greater than 1
    /* greater than ">="      */ expect(3 >= 3).toBe(true); // number 3 to be greater than or equal to 3
    /* less then "<"          */ expect(3 < 9).toBe(true); // number 3 to be less then 9
    /* less then "<="         */ expect(3 <= 3).toBe(true); // number 3 to be less then or equal to 3
  });

  it("arithmetic operators", () => {
    // use the following arithmetic operators to get the test to pass
    // we will skip + (plus), - (minus), / (divide), * (multiple), ** (exponent) operators since we used these in the number test

    let a = 1;
    a++;

    let b = 10;
    b--;

    /* Remainder (a.k.a modulo)  "%"         */ expect(12 % 5).toBe(2); // 12 divided by 5 should have a remainder of 2
    /* Increment (a.k.a increase by 1)  "++" */ expect(a).toBe(2); // value of a plus 1
    /* Decrement (a.k.a decrease by 1)  "--" */ expect(b).toBe(9); // value of b minus 1
    /* negative number  "-"                  */ expect(-b).toBe(-9); // negative values of b *note this one goes before the variable
  });

  it("logical operators", () => {
    // its called logic because it makes since
    // logical operators read like english conjunctions AND, OR
    // fill in the toBe() method with the expected outcome of
    // the following expects containing logical operators
    // https://www.sitepoint.com/javascript-truthy-falsy/

    expect(true && true).toBe(true);
    expect(false && true).toBe(false);
    expect(true && false).toBe(false);

    expect(true || false).toBe(true);
    expect(false || true).toBe(true);
    expect(true || false).toBe(true);

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

    expect(true).toBeTruthy();
    expect("false").toBeTruthy();
    expect(true && "sheep").toBeTruthy();
    expect(300).toBeTruthy();

    expect(NaN).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(false).toBeFalsy();
    expect(10000 && false).toBeFalsy();
  });

  // DEM0 first
  it("ternary", () => {
    // ternaries can be used as a short hand to if else statements
    // rewrite the following if statements into ternary notation
    // example
    // a = true ? 'yep' : 'no'

    let a;
    a = 1 < 2 ? "lesser" : "greater";

    /* if(1 < 2) {
      a = 'lesser'
    } else {
      a = 'greater'
    }
    */

    let b = a === "greater" ? "big number" : "small number";
    /* if (a === "greater") {
      b = "big number";
    } else {
      b = "small number";
    }
    */
    
    
    let c = b  ? 'there was a truthy' : 'there was a falsy';
    /* if (b) {
      c = "there was a truthy";
    } else {
      c = "there was a falsy";
    }
    */
    expect(a).toBe("lesser");
    expect(b).toBe("small number");
    expect(c).toBe("there was a truthy");
  });
});
