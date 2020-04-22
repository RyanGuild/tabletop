import { TBLAction } from "../data/interfaces";
import { InputKeys, ActionTypes } from "../data/enums";

export default function keyUp(keycode: number): TBLAction<InputKeys> {
  return {
    type: ActionTypes.KEY_UP,
    payload: keycode,
  };
}
