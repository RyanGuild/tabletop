import { TBLAction } from "../data/interfaces";
import { InputKeys, ActionTypes } from "../data/enums";
import { ErrorTypes } from "../data/errors";

export default function keyUp(keycode: number): TBLAction<InputKeys> {
  if (keycode in InputKeys) {
    return {
      type: ActionTypes.KEY_DOWN,
      payload: keycode,
    };
  } else {
    throw new Error(ErrorTypes.InvalidInputKeyError);
  }
}
