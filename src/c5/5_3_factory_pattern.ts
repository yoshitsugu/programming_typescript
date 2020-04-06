// tslint:disable:max-classes-per-file

type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

const Shoe = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

console.log(Shoe.create("balletFlat"));
console.log(Shoe.create("boot"));
console.log(Shoe.create("sneaker"));

type ShoeCreate = {
  (type: "balletFlat"): BalletFlat;
  (type: "boot"): Boot;
  (type: "sneaker"): Sneaker;
};

const Shoe2: { create: ShoeCreate } = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

console.log(Shoe2.create("balletFlat"));
console.log(Shoe2.create("boot"));
console.log(Shoe2.create("sneaker"));

type ShoeTypeMap = {
  balletFlat: BalletFlat;
  boot: Boot;
  sneaker: Sneaker;
};

type ShoeCreateByMap = <T extends keyof ShoeTypeMap>(type: T) => ShoeTypeMap[T];

const Shoe3: { create: ShoeCreateByMap } = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

console.log(Shoe3.create("balletFlat"));
console.log(Shoe3.create("boot"));
console.log(Shoe3.create("sneaker"));
