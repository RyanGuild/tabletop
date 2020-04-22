import {
  fork,
  cancel,
  take,
  takeLatest,
  select,
  put,
} from "redux-saga/effects";
import { ActionTypes } from "../data/enums";
import { TBLAction, PointerData } from "../data/interfaces";
import { Vector3 } from "three";
import setCameraPosition from "../actions/setCameraPosition";
import { PAN_SCALE_FACTOR } from "../data/constants";

export default function* PanSaga() {
  while (true) {
    let mouseDownAction: TBLAction<PointerData> = yield take(
      ActionTypes.MOUSE_DOWN
    );
    let panTask = yield fork(PanningTask(mouseDownAction));
    yield take(ActionTypes.MOUSE_UP);
    yield cancel(panTask);
  }
}

function PanningTask(mouseDownAction: TBLAction<PointerData>) {
  return function* () {
    let { cameraPosition } = yield select();
    yield takeLatest(ActionTypes.MOUSE_MOVE, function* (
      mouseMoveAction: TBLAction<PointerData>
    ) {
      let deltaX =
        mouseDownAction.payload.clientX - mouseMoveAction.payload.clientX;
      let deltaY =
        mouseDownAction.payload.clientY - mouseMoveAction.payload.clientY;

      let deltaVector = new Vector3(
        deltaX * PAN_SCALE_FACTOR,
        0,
        deltaY * PAN_SCALE_FACTOR
      );

      let nextCameraPosition = new Vector3().addVectors(
        cameraPosition,
        deltaVector
      );
      yield put(setCameraPosition(nextCameraPosition));
    });
  };
}
