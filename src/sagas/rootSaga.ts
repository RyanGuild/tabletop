import { spawn, all, put } from "redux-saga/effects";
import mouseSaga from "./mouseSaga";
import toolsSaga from "./toolsSaga";
import cameraSaga from "./cameraSaga";
import campainSaga from "./campainSaga";
import startupFlow from "../actions/startupFlow";

export default function* rootSaga() {
  console.log();
  yield all([
    spawn(campainSaga),
    spawn(mouseSaga),
    spawn(cameraSaga),
    spawn(toolsSaga),
  ]);

  yield put(startupFlow());
}
