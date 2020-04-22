import { ActionTypes } from "../data/enums";
import { TBLAction } from "../data/interfaces";

export type JoinCampaignActionPayload = {};

export default function (
  payload: JoinCampaignActionPayload
): TBLAction<JoinCampaignActionPayload> {
  return {
    type: ActionTypes.JOIN_CAMPAIGN,
    payload: payload,
  };
}
