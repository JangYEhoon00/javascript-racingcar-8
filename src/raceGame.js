import CarInfo from "./carInfo.js";
import makeRandomNumber from "./randomNumber.js";
import { Console } from "@woowacourse/mission-utils";

export default class RaceGame {
  constructor(carNames, roundCount) {
    this.cars = this.createCars(carNames);
    this.roundCount = roundCount;
  }

  createCars(carNames) {
    const NAME_ARRAY = carNames.split(",");

    return NAME_ARRAY.map((name) => new CarInfo(name.trim()));
  }

  playRound(RandomNumber) {
    this.cars.forEach((car) => {
      const randomNumber = makeRandomNumber();
      car.move(randomNumber);
    });
  }

  displayRoundResult() {
    this.cars.forEach((car) => {
      Console.print(`${car.getName()} : ${car.getDisplayedPosition()}`);
    });
    Console.print("");
  }

  play() {
    Console.print("실행 결과");
    for (let i = 0; i < this.roundCount; i++) {
      this.playRound();
      this.displayRoundResult();
    }
  }

  getWinners() {
    const MAX_POSITION = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars
      .filter((car) => car.getPosition() === MAX_POSITION)
      .map((car) => car.getName());
  }
}
