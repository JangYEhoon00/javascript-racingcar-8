import CarInfo from "./carInfo";
import { makeRandomNumber } from "./randomNumber";

export default class RaceGame {
  cars;
  constructor(carName) {
    this.cars = this.createCars(carName);
  }

  createCars(carName) {
    const NAME_ARR = carName.split(",");

    return NAME_ARR.map((name) => {
      return new CarInfo(name.trim());
    });
  }

  playGameRound() {
    this.cars.forEach((car) => {
      const RANDOM_NUMBER = makeRandomNumber();
      car.move(RANDOM_NUMBER);
    });
  }

  getGameResult() {
    return this.cars.map((car) => ({
      name: car.getName(),
      position: car.getPositionDisplay(),
    }));
  }

  getWinner() {
    const MAX_POSITION = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars
      .filter((car) => car.getPosition() === MAX_POSITION)
      .map((car) => car.getName());
  }
}
