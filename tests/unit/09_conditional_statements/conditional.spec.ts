// https://www.w3schools.com/js/js_if_else.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

interface Passenger {
  firstName: string;
  lastName: string;
  seatType?: () => string;
  juicePreference?: (number) => string;
  ticket?: {
    seatNumber: number | null;
    expired: boolean;
  };
}

describe("conditional statement", () => {
  const terry: Passenger = new CreatePassenger("Terry", "Jones");

  test("Terry needs to buy a ticket to get on the plane", () => {
    // eslint-disable-next-line prefer-const
    let hasValidTicket = false;

    // use the provided BuyTicket functions to buy a ticket for Terry
    // create an if statement to verify if a passenger has a ticket

    BuyTicket(terry);

    if (terry.ticket) {
      hasValidTicket = true;
    }

    expect(hasValidTicket).toBe(true);
  });

  test("Terry can find a seat on the plane", () => {
    // modify the seat type method in the CreatePassenger Factory
    // inside that method...
    // create an if statement to "return" the seat type
    // if the seat number is higher than 50 its a "First Class" seat
    // else it is a "Coach" seat

    expect(terry.seatType()).toBe("Coach");

    // Terry realized he did pick a seat when he purchased his ticket
    // this means by default he will be in coach
    // Terry would like to sit in first class
    // help terry purchase a new ticket with a new seat assignment

    BuyTicket(terry, 51);
    console.log(terry);

    expect(terry.seatType()).toBe("First Class");
  });

  test("Terry wants to be in an exit row", () => {
    // modify the seat type method on the CreatePassenger Factory
    // add an "else if" statement if the seat number is 77 that seat type is an "Exit Row"

    BuyTicket(terry, 77);

    expect(terry.seatType()).toBe("Exit Row");
  });

  test("Terry likes his juices", () => {
    // modify the juice Preference method on the CreatePassenger Factory
    // this method takes in a number which will represent a selection of a juice type
    // using a "switch" statement make the follow test true

    expect(terry.juicePreference(1)).toBe("Apple");
    expect(terry.juicePreference(2)).toBe("Orange");
    expect(terry.juicePreference(3)).toBe("Carrot");
    expect(terry.juicePreference(4)).toBe("Tomato");
    expect(terry.juicePreference(5)).toBe("Strawberry");
  });
});

// this is a "Factory" function, it will create a new instancve object with property and methods
function CreatePassenger(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.seatType = () => {
    let type = "no seat";
    if (this.ticket.seatNumber === 77) {
      type = "Exit Row";
    } else if (this.ticket.seatNumber >= 50) {
      type = "First Class";
    } else {
      type = "Coach";
    }
    return type;
  };
  this.juicePreference = (selectedOption) => {
    let juice = "no juice";
    switch (selectedOption) {
      case 1:
        juice = "Apple";
        break;
      case 2:
        juice = "Orange";
        break;
      case 3:
        juice = "Carrot";
        break;
      case 4:
        juice = "Tomato";
        break;
      case 5:
        juice = "Strawberry";
        break;
    }
    return juice;
  };
}

function BuyTicket(
  passenger: Passenger,
  seatNumber: number | null = null
): Passenger {
  passenger.ticket = {
    seatNumber,
    expired: false,
  };
  return passenger;
}
