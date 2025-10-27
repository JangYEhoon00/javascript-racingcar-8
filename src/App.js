import { Console } from "@woowacourse/mission-utils";
import RaceGame from "./raceGame.js";
import GameInput from "./gameInput.js";

class App {
  async run() {
    try {
      const CAR_NAMES = await GameInput.getCarNames();
      const ROUND_COUNT = await GameInput.getRoundCount();

      const RACE_GAME = new RaceGame(CAR_NAMES, ROUND_COUNT);
      RACE_GAME.play();

      const WINNERS = RACE_GAME.getWinners();
      Console.print(`최종 우승자 : ${WINNERS.join(", ")}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
