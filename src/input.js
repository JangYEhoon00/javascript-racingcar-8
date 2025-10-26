import { Console } from "@woowacourse/mission-utils";

export default async function getInput(message) {
  const input_Value = await Console.readLineAsync(`${message} : `);
  const trim_Input = input_Value.replaceAll(" ", "");

  return trim_Input;
}
