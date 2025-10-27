import { Console } from "@woowacourse/mission-utils";

export default class GameInput {
  static async getCarNames() {
    const INPUT = await Console.readLineAsync("자동차 이름을 입력하세요.");
    const TRIMMED_INPUT = INPUT.replaceAll(" ", "");
    
    return TRIMMED_INPUT;
  }

  static async getRoundCount() {
    const INPUT = await Console.readLineAsync("실행 횟수를 입력하세요. : ");
    const COUNT = Number(INPUT);

    if (isNaN(COUNT) || COUNT <= 0 || !Number.isInteger(COUNT)) {
      throw new Error("[ERROR] 1 이상의 정수를 입력해 주세요.");
    }

    return COUNT;
  }
}
