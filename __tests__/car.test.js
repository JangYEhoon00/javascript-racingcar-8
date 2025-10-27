import CarInfo from "../src/carInfo.js";

describe("CarInfo 클래스 테스트", () => {
  test("자동차 이름이 5자 이하인 경우 정상적으로 생성된다", () => {
    expect(() => new CarInfo("pobi")).not.toThrow();
    expect(() => new CarInfo("12345")).not.toThrow();
  });

  test("자동차 이름이 5자를 초과하면 예외가 발생한다", () => {
    const car = new CarInfo("123456");
    expect(async () => await car.carName("123456")).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 빈 문자열이면 예외가 발생한다", () => {
    const car = new CarInfo("");
    expect(async () => await car.carName("")).rejects.toThrow("[ERROR]");
    expect(async () => await car.carName("   ")).rejects.toThrow("[ERROR]");
  });

  test("랜덤 값이 4 이상이면 전진한다", () => {
    const CAR = new CarInfo("pobi");
    CAR.move(4);
    expect(CAR.getPosition()).toBe(1);

    CAR.move(5);
    expect(CAR.getPosition()).toBe(2);

    CAR.move(3);
    expect(CAR.getPosition()).toBe(2);
  });

  test("랜덤 값이 4 미만이면 멈춘다", () => {
    const CAR = new CarInfo("pobi");
    CAR.move(3);
    expect(CAR.getPosition()).toBe(0);

    CAR.move(0);
    expect(CAR.getPosition()).toBe(0);
  });

  test("자동차 이름을 반환한다", () => {
    const CAR = new CarInfo("pobi");
    expect(CAR.getName()).toBe("pobi");
  });

  test("자동차 위치를 시각적으로 표현한다", () => {
    const CAR = new CarInfo("pobi");
    expect(CAR.getDisplayedPosition()).toBe("");

    CAR.move(4);
    expect(CAR.getDisplayedPosition()).toBe("-");

    CAR.move(5);
    expect(CAR.getDisplayedPosition()).toBe("--");
    
    CAR.move(3);
    expect(CAR.getDisplayedPosition()).toBe("--");
  });
});
