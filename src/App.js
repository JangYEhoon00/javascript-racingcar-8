import { Console } from "@woowacourse/mission-utils";
import { getInput, getCount } from "./input.js";
import RaceGame from "./raceGame.js";

class App {
  async run() {
    const NAME_INPUT = await getInput();
    const NUMBER_OF_COUNTS = await getCount();

    this.validRoundNumber(NUMBER_OF_COUNTS);
  }
}

export default App;
