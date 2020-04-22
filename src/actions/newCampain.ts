import { ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export type NewCampainActionPayload = {};

export default function (
  payload: NewCampainActionPayload
): TBLAction<NewCampainActionPayload> {
  return {
    type: ActionTypes.NEW_CAMPAIN,
    payload,
  };
}
