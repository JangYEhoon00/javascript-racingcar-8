import RaceGame from "../src/raceGame.js";
import { Console } from "@woowacourse/mission-utils";
import makeRandomNumber from "../src/randomNumber.js";

jest.mock("@woowacourse/mission-utils");
jest.mock("../src/randomNumber.js", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("RaceGame 클래스 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Console.print = jest.fn();
  });

  describe("생성자 테스트", () => {
    test("이름과 시행회수를 정상적으로 입력받으면 게임을 실행한다", () => {
      expect(() => new RaceGame("pobi,woni,jun", 5)).not.toThrow();
    });

    test("여러 자동차를 정상적으로 만든다", () => {
      const game = new RaceGame("pobi,woni,jun", 5);

      expect(game.cars.length).toBe(3);
      expect(game.cars[0].getName()).toBe("pobi");
      expect(game.cars[1].getName()).toBe("woni");
      expect(game.cars[2].getName()).toBe("jun");
    });

    test("이름에 있는 공백을 자동으로 제거한다", () => {
      const game = new RaceGame("pobi , woni , jun", 5);

      expect(game.cars.length).toBe(3);
      expect(game.cars[0].getName()).toBe("pobi");
      expect(game.cars[1].getName()).toBe("woni");
      expect(game.cars[2].getName()).toBe("jun");
    });
  });

  describe("playRound 테스트", () => {
    test("모든 자동차가 한 라운드를 진행한다", () => {
      const game = new RaceGame("pobi,woni", 1);
      makeRandomNumber.mockReturnValue(4); 

      game.playRound();

      expect(makeRandomNumber).toHaveBeenCalledTimes(2);
    });

    test("랜덤값이 4 이상이면 자동차가 전진한다", () => {
      const game = new RaceGame("pobi", 1);
      makeRandomNumber.mockReturnValue(4);

      game.playRound();

      expect(game.cars[0].getPosition()).toBe(1);
    });

    test("랜덤값이 3 이하면 자동차가 멈춘다", () => {
      const game = new RaceGame("pobi", 1);
      makeRandomNumber.mockReturnValue(3);

      game.playRound();

      expect(game.cars[0].getPosition()).toBe(0);
    });
  });

  describe("displayRoundResult 테스트", () => {
    test("각 자동차의 상태를 출력한다", () => {
      const game = new RaceGame("pobi,woni", 1);
      makeRandomNumber.mockReturnValueOnce(4).mockReturnValueOnce(3);

      game.playRound();
      game.displayRoundResult();

      expect(Console.print).toHaveBeenCalledWith("pobi : -");
      expect(Console.print).toHaveBeenCalledWith("woni : ");
      expect(Console.print).toHaveBeenCalledWith("");
    });
  });

  describe("getWinners 테스트", () => {
    test("단일 우승자를 반환한다", () => {
      const game = new RaceGame("pobi,woni", 1);
      makeRandomNumber.mockReturnValueOnce(4).mockReturnValueOnce(3);

      game.playRound();

      const winners = game.getWinners();

      expect(winners).toEqual(["pobi"]);
    });

    test("여러 우승자를 반환한다", () => {
      const game = new RaceGame("pobi,woni,jun", 2);
      
      makeRandomNumber
        .mockReturnValueOnce(4) 
        .mockReturnValueOnce(4) 
        .mockReturnValueOnce(3) 
        .mockReturnValueOnce(4) 
        .mockReturnValueOnce(4) 
        .mockReturnValueOnce(3);

      game.play();
      const winners = game.getWinners();

      expect(winners).toContain("pobi");
      expect(winners).toContain("woni");
      expect(winners.length).toBe(2);
    });

    test("모든 자동차가 같은 위치면 모두 우승자다", () => {
      const game = new RaceGame("pobi,woni,jun", 1);
      makeRandomNumber.mockReturnValue(3); 

      game.playRound();

      const winners = game.getWinners();

      expect(winners.length).toBe(3);
      expect(winners).toContain("pobi");
      expect(winners).toContain("woni");
      expect(winners).toContain("jun");
    });
  });

  describe("play 테스트", () => {
    test("지정된 라운드 수만큼 게임을 진행한다", () => {
      const game = new RaceGame("pobi,woni", 3);
      makeRandomNumber.mockReturnValue(4);

      game.play();

      expect(Console.print).toHaveBeenCalledWith("실행 결과");
      expect(Console.print).toHaveBeenCalledTimes(10);
    });

    test("각 라운드마다 자동차들이 이동한다", () => {
      const game = new RaceGame("pobi", 2);
      makeRandomNumber.mockReturnValue(4);

      game.play();

      expect(game.cars[0].getPosition()).toBe(2);
    });
  });
});