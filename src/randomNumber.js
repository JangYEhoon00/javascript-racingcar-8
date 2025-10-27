import { Random } from "@woowacourse/mission-utils";

const MIN_RANDOM_VALUE = 0;
const MAX_RANDOM_VALUE = 9;

export default function makeRandomNumber() {
  const NUM_RANGE = Random.pickNumberInRange(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);

  return NUM_RANGE;
}
