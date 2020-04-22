import { take, put, race, delay } from "redux-saga/effects";
import { ActionTypes } from "../data/enums";
import { TBLAction, PointerData } from "../data/interfaces";
import matClick from "../actions/matClick";
import setSelectStartPoint from "../actions/setSelectStartPosition";
import setSelectEndPoint from "../actions/setSelectEndPosition";
import clearSelection from "../actions/clearSelection";

export default function* MatMouseSaga() {
  while (true) {
    let mouseDownAction: TBLAction<PointerData> = yield take(
      ActionTypes.MOUSE_DOWN
    );
    let { timer } = yield race({
      mouseUp: take(ActionTypes.MOUSE_UP),
      timer: delay(100),
    });

    if (timer) {
      //select event
      yield put(setSelectStartPoint(mouseDownAction.payload.matVector));
      let mouseUpAction: TBLAction<PointerData> = yield take(
        ActionTypes.MOUSE_UP
      );
      yield put(setSelectEndPoint(mouseUpAction.payload.matVector));
      //do stuff with selection

      yield put(clearSelection());
    } else {
      //click event
      yield put(matClick(mouseDownAction.payload.matVector));
    }
  }
}
