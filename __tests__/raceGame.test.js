import RaceGame from "../src/raceGame";

describe("RaceGame 클래스 테스트", () => {
  test("이름과 시행회수를 정상적으로 입력받으면 게임을 시작한다.", () => {
    expect(() => new RaceGame("pobi,woni,jun", 5)).not.toThrow();
  });

  test("자동차 이름이 없다면 예외처리 한다.", () => {
    expect(() => new RaceGame("", 5)).tOThrow("[ERROR]");
  });

  test("시행 회수가 0 이하면 에러를 발생시킨다.", () => {
    expect(() => new RaceGame("pobi,woni,jun", 0)).tOThrow("[ERROR]");
    expect(() => new RaceGame("pobi,woni,jun", -1)).tOThrow("[ERROR]");
  });

  test("시행 회수가 정수가 아니라면 에러를 발생시킨다.", () => {
    expect(() => new RaceGame("pobi,woni,jun", 3.5)).tOThrow("[ERROR]");
    expect(() => new RaceGame("pobi,woni,jun", "이십삼")).tOThrow("[ERROR]");
  });
});
