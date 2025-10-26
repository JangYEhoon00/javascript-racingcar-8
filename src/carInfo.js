import getInput from "./input.js";

export default class CarInfo {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  async carName(name) {
    if (!name || name.trim().length === 0) {
      throw new Error("[ERROR] 자동차 이름은 공백으로 자을수 없습니다.");
    }
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 만들어야 합니다.");
    }
  }

  move(randomValue) {
    if (randomValue >= 4) {
      this.position++;
    }
  }
  getCarName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  getDisplayedPosition() {
    return "-".repeat(this.position);
  }
}
