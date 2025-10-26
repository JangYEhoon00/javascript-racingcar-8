import { Random } from "@woowacourse/mission-utils";

export default function checkNumber() {
  const NUM_RANGE = Random.pickNumberInRange(0, 9);

  return NUM_RANGE;
}
