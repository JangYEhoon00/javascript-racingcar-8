import { Console } from "@woowacourse/mission-utils";
import { getInput, getCount } from "./input.js";

class App {
  async run() {
    const NAME_INPUT = await getInput();
    const NUMBER_OF_COUNTS = await getCount();
  }
}

export default App;
