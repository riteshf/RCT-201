// class

class Car {
  chaiseNumber: number;
  name: string;
  constructor(chaiseNumber: number, name: string) {
    this.chaiseNumber = chaiseNumber;
    this.name = name;
  }
}

type IndicaPlace = "Gujarat" | "Factory 2" | "Factory 3";
type IndicaEngineCC = 1000 | 1500 | 4000;
type IndicaTypeSizes = "18" | "20" | "22";

class Indica extends Car {
  fuelCapacity: number;
  engineCC: IndicaEngineCC;
  tyreSize: IndicaTypeSizes;
  place: IndicaPlace;
  constructor(
    place: IndicaPlace,
    fuelCapacity: number,
    engineCC: IndicaEngineCC,
    tyreSize: IndicaTypeSizes
  ) {
    super(Date.now(), "Indica");
    this.place = place;
    this.fuelCapacity = fuelCapacity;
    this.engineCC = engineCC;
    this.tyreSize = tyreSize;
  }
}

type NexonPlace = "Factory 2" | "Factory 3";
type NexonEngineCC = 1000 | 1500 | 4000;
type NexonTypeSizes = "22" | "26";
type NexonCarType = "Petrol" | "Desiel" | "EV";

class Nexon extends Car {
  place: NexonPlace;
  carType: NexonCarType;
  tyreSize: NexonTypeSizes;
  fuelCapacity?: number;
  engineCC?: NexonEngineCC;
  constructor(
    place: NexonPlace,
    carType: NexonCarType,
    tyreSize: NexonTypeSizes,
    fuelCapacity?: number,
    engineCC?: NexonEngineCC
  ) {
    super(Date.now(), "Nexon");
    this.place = place;
    this.carType = carType;
    if (carType !== "EV") {
      this.fuelCapacity = fuelCapacity;
      this.engineCC = engineCC;
    }
    this.tyreSize = tyreSize;
  }
}

let indica1 = new Indica("Gujarat", 20, 1000, "20");
let nexon1 = new Nexon("Factory 2", "EV", "26");
