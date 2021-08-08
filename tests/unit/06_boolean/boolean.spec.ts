/* eslint-disable no-self-compare */
/* eslint-disable no-constant-condition */

// A JavaScript Boolean represents one of two values: true or false.
// https://www.w3schools.com/js/js_booleans.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
describe("boolean", () => {
  it("is true", () => {
    let myVar;

    if (true) {
      myVar = true;
    }

    expect(myVar).toBe(true); // what value will myVar have? Put the correct answer in the toBe() method
  });

  it("is false", () => {
    let myVar;

    if (true) {
      myVar = false;
    }

    expect(myVar).toBe(false); // what value will myVar have? Put the correct answer in the toBe() method
  });

  test("boolean can be derived by expressions", () => {
    // An expression is a sentence with a minimum of two numbers and at least one math operation
    // fill in the toBe() methods to make the test pass
    expect(540 > 49.04040496988).toBe(true);
    expect(200 < 1000).toBe(true);
    expect(93 <= 93).toBe(true);
    expect(1 >= 1.0304394).toBe(false);
  });
});
