type Reservation = {
  from?: Date;
  to?: Date;
  destination: string;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

const reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (typeof fromOrDestination === "string") {
    return {
      destination: fromOrDestination
    };
  } else if (toOrDestination instanceof Date && destination !== undefined) {
    return {
      from: fromOrDestination,
      to: toOrDestination,
      destination
    };
  } else if (typeof toOrDestination === "string") {
    return {
      from: fromOrDestination,
      destination: toOrDestination
    };
  } else {
    throw new Error("invalid reservation");
  }
};

console.log(reserve(new Date("2020-03-31"), new Date("2020-04-02"), "Tokyo"));
console.log(reserve(new Date("2020-01-15"), "Kyoto"));
console.log(reserve("Naha"));
