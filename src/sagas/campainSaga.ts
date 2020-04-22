import { take, put, race, cancel, takeEvery } from "redux-saga/effects";
import { ActionTypes } from "../data/enums";
import startupFlow from "../actions/startupFlow";

export default function* CampainSaga() {
  yield takeEvery(ActionTypes.STARTUP_FLOW, StartupTask);
}

function* StartupTask() {
  let { finished, canceled } = yield race({
    canceled: take(ActionTypes.STARTUP_FLOW_CANCLED),
    finished: race({
      load: take(ActionTypes.LOAD_CAMPAIGN),
      join: take(ActionTypes.JOIN_CAMPAIGN),
      create: take(ActionTypes.NEW_CAMPAIN),
    }),
  });
  if (!canceled) {
  }
}
