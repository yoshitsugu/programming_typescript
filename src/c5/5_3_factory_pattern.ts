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
  }
};

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
  }
};

console.log(Shoe2.create("balletFlat"));
console.log(Shoe2.create("boot"));
console.log(Shoe2.create("sneaker"));
