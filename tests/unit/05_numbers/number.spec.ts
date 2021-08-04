
// https://www.w3schools.com/js/js_numbers.asp
// https://www.w3schools.com/js/js_number_methods.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
describe('numbers functions', () => {
  // Create a new file called number.ts under the src folder
  // this file will contain the functions you will create to pass the following test
  // this file will follow the same pattern as main.ts and string.ts where there will be export function
  // these function will be imported into this file and assigned to a import variable name "myNumFuncs"
  // import statements must be in the top of the file 
  // example: import myCustomImportName from 'path/to/file'
  // if there are multiple exports in a file and does not have a default export you can use the "* as" modifier to get all exported function
  // example: import * as myCustomImportName from 'path/to/file'
  // remember you can see an working example of this in the test/unit/string.spec.ts file

  it.skip('can do simple addition', () => {
    // expect(myNumFuncs.add(21, 45)).toBe(66)
  })

  it.skip('can do simple subtraction', () => {
    // expect(myNumFuncs.subtract(99, 1)).toBe(98)
  })

  it.skip('can do simple multiplication', () => {
    // expect(myNumFuncs.multiply(5, 7)).toBe(35)
  })

  it.skip('can do simple division', () => {
    // expect(myNumFuncs.divide(100, 50)).toBe(2)
  })

  it.skip('can find the square root of any number', () => {
    // hint: use the ** operator... more on operators later
    
    // expect(myNumFuncs.squareRoot(8)).toBe(64)
  })

  it.skip('can calculate a tip for good service (20% of total bill)', () => {
    // hint: in currency we normally don't concern our selfs with 1000ths of a dollar we can either drop this amount or round it
    // for this use toPrecision() to trim off the hanging numbers 

    // expect(myNumFuncs.calculateGoodTip(43.97)).toBe('8.79') // *notice toPrecision converts a number to a string
  })

  it.skip('can parse whole numbers from a string representing a number', () => {
    // hint: use parseInt()

    // expect(myNumFuncs.stringParserInt("42")).toStrictEqual(42) // * notice parseInt converts a string to a number
  })

  it.skip('can parse numbers with decimals (a.k.a. floats) from a string representing a number with decimals', () => {
    // hint: use parseFloat()

    // expect(myNumFuncs.stringParserFloat("42.333")).toStrictEqual(42.333) // * notice parseFloat converts a string to a number
  })

  it.skip('can use the Number primitive to parse strings into numbers', () => {
    // you can also use Number('string with a number in it') to convert a string into a number


    // expect(myNumFuncs.forceNumberType("42.333")).toStrictEqual(42.333)

    // if parsing the string to a number fails these functions will return a type NaN (not a number) 
    // expect(myNumFuncs.forceNumberType("unicorn")).toBe(NaN)
  })

  it.skip('can roll a 6 sided die', () => {
    // javascript comes packaged with a built in library Math to help you complete higher math operations
    // examples of this are Math.random(), Math.round(), Math.floor(), etc
    // here is a tutorial on how to accomplish this but give it a shot on your own first
    // https://dev.to/rocambille/how-to-roll-a-dice-in-javascript-51j0


    // expect(typeof myNumFuncs.roll6D()).toBeGreaterThanOrEqual(1)
    // expect(typeof myNumFuncs.roll6D()).toBeLessThan(7)
  })
})