import * as nums from "../../../src/number";

// Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement

describe("loops", () => {
  const rollSpy = jest.spyOn(nums, "roll6D");

  afterEach(() => {
    rollSpy.mockReset();
  });

  it.skip("do a dex save (for)", () => {
    // A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.
    // A for statement looks as follows:
    /*
        for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
          ...code inside for loop...
        }


        Example:

        for(let i = 0; i < 3; i++) {
          console.log('hi')
        }

        which will results in...

        log 'hi'
        log 'hi'
        log 'hi'
    */
   /* for (let i = 0; i < 200000; i++) {
    nums.roll6D();
    }

    // A semi-truck delivering die had an accident on the highway and spilt 200000 6 side die around the road
    // using a basic for loop simulate the 200000 die roll with the "roll6D" function that exists in the numbers file
    expect(rollSpy).toBeCalledTimes(200000);
 */
  });
 
  it("array number numbers 1 - 5 (for)", () => {
    const numArray = [];
    for (let i = 1; i <= 5; i++) {
      numArray.push(i);
    }
    // using a basic for loop add numbers 1 though 5 to "numArray"
    // note: watch out for the index / starting number

    expect(numArray).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it("array number numbers 5 - 10 (for)", () => {
    const numArray = [];
    for (let i = 5; i <= 10; i++) {
      numArray.push(i);
     }
    // using a basic for loop add numbers 5 though 10 to "numArray"
    // note: watch out for the index / starting number

    expect(numArray).toStrictEqual([5, 6, 7, 8, 9, 10]);
  });

  it("who's in the apartment (for in)", () => {
    // "for in" loops are a handy way to iterate over property of objects
    /*
      Example 

      const myObj = { a: 1, b: 2, c: 3 }
      
      for(let property in myObj) {
        console.log(property)
      }

      which will results in...

      log 'a'
      log 'b'
      log 'c'

    */

    // remember how you access property values in objects?
    // you can use the classic dot notation:
    /*
                myObj.a
        {object name}.{property name}
    */
    //  or you can use the square bracket notation in instances where the (property / key) name is dynamic, just like in a for loop situation
    /*
                myObj[property]
        {object name}[{dynamic property variable}]
    */

    /** don't edit */
    // eslint-disable-next-line no-unused-vars
    const apartment = {
      firstFloor: "Jan",
      secondFloor: "Stacy",
      thirdFloor: "Fred",
    };

    const peopleInApartment = [];
    /** end don't edit */
for(const tenant in apartment){
  peopleInApartment.push(apartment[tenant])
}
    // Using a "for in" loop populate the "peopleInApartment" array with the value of each (property / key) in the apartment object

    expect(peopleInApartment).toStrictEqual(["Jan", "Stacy", "Fred"]);
  });

  it("this party is lit! (while)", () => {
    // A "while" loop is great for repeatably executing code file a statement is true
    /*
      while (condition) {
        ... code executes while true...
      }
    */
      
    /** don't edit */
    const JoeTheDrinker = new PartyGoer("Joe", 6);
    /** end don't edit */
      while (!JoeTheDrinker.isDrunk()){
       // console.log('ziggy zaga, ziggy zaga, ziggy zaga, OI, OI, OI!')
        JoeTheDrinker.drink()
      }
    // a PartyGoer made from the PartyGoer factor has a method call "isDrunk"
    // use this method to test if JoeTheDrinker is drunk if he is not drunk
    // use the "drink" method to give joe another till he is drunk

    expect(JoeTheDrinker.isDrunk()).toBe(true);
  });

  it("break it up (break)", () => {
    // for loops support the "continue" and "break" keywords in side the executable code block
    // if a "continue" keyword executes in the for the loop block it will skip all the follow code and go to the next iteration
    // if a "break" keyword executes in the for the loop block it will stop all execution of the block and stop the loop for iterating
    /*
        for(condition i = 0; i < 3; i++) {
          if(true) {
            continue
          } else {
            break
          }
        }
    */

    const countingSheep = [];

    for (let i = 0; i < 100; i++) {
      if(i === 50) {
        break
      }
      countingSheep.push("Sheep");
    }

    // You're trying to fall asleep so you start to count sheep in your help.
    // You decide that counting to 100 is a good start but you fall asleep when you reach 50
    // using the break keywords stop the loop from executing so that you only count 50 sheep

    expect(countingSheep.length).toBe(50);
  });

  it("my the odds ever be in your favor", () => {
    // the following code builds an array that describes if a number is odd or even
    // by only adding the "continue" keyword to the following code
    // make the test pass

    const evenOddArray = [];

    for (let i = 1; i < 8; i++) {
      
      if (i % 2 === 0) {
        evenOddArray.push(i + " even");
        continue
      }

      evenOddArray.push(i + " odd");
      
    }

    expect(evenOddArray).toStrictEqual([
      "1 odd",
      "2 even",
      "3 odd",
      "4 even",
      "5 odd",
      "6 even",
      "7 odd",
    ]);
  });
  

  // Homework
  // Read the docs for "do while" loops and create a test executing a do while statement
  it.todo("do...while");
});

function PartyGoer(name, drinkLimit) {
  this.name = name;
  this.drinkLimit = drinkLimit;
  this.drinksHad = 0;
  this.drink = () => {
    this.drinksHad++;
  };
  this.isDrunk = () => {
    return this.drinksHad >= this.drinkLimit;
  };
}
