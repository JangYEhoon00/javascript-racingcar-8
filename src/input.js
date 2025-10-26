import { Console } from "@woowacourse/mission-utils";

export default async function getName() {
  const GET_NAME = await Console.readLineAsync("이름을 입력하세요. : ");
  const TRIM_Input = input_Value.replaceAll(" ", "");

  if (!(trim_Input.length <= 5)) {
    throw new Error("이름의 길이는 5자 이하입니다.");
  }
  return TRIM_Input;
}

export default function getCount(){
   const GET_COUNT =  Console.readLineAsync("실행 횟수를 입력하세요. : ");
   
   return GET_COUNT
}