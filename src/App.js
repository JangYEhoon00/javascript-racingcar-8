import { Console } from "@woowacourse/mission-utils";
import getInput from "./input.js";

class App {
  async run() {
    const NAME_INPUT = await getInput("이름을 입력하세요.");
    const NUMBER_OF_COUNTS = await getInput("회수를 입력하세요.");
  }
}

export default App;
