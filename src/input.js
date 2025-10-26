import { Console } from "@woowacourse/mission-utils";

export default async function getName() {
  const GET_NAME = await Console.readLineAsync("이름을 입력하세요. : ");
  const TRIM_Input = input_Value.replaceAll(" ", "");

  return TRIM_Input;
}

export default async function getCount(){
  const GET_COUNT = await Console.readLineAsync("실행 횟수를 입력하세요. : ");
   
  return GET_COUNT
}

export default  function validRoundNumber(count) {
  const COUNT_NUMBER = Number(count);

  if (isNaN(COUNT_NUMBER) || count <= 0 || Number.isInteger(count)) {
    throw new Error ('[ERROR] 1 이상의 정수를 입력해 주세요.')
  }
}