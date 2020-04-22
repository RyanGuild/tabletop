import { TBLAction } from "../data/interfaces";
import { ActionTypes } from "../data/enums";

export type LoadCampaignActionPayload = {};

export default function (
  payload: LoadCampaignActionPayload
): TBLAction<LoadCampaignActionPayload> {
  return {
    type: ActionTypes.LOAD_CAMPAIGN,
    payload: payload,
  };
}
