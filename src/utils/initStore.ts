import { createStore, applyMiddleware, compose, Store } from "redux";

import { RootReducer, RootState } from "../reducers/index";
import keyDown from "../actions/keyDown";
import keyUp from "../actions/keyUp";
import setZoomLevel from "../actions/setZoomLevel";

import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import { TBLAction } from "../data/interfaces";

export default function (): Store<RootState, TBLAction<any>> {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  function KeyDownEventHandler(event: KeyboardEvent) {
    try {
      store.dispatch(keyDown(event.keyCode));
      event.preventDefault();
    } catch (e) {}
  }
  function KeyUpEventHandler(event: KeyboardEvent) {
    //@ts-ignore
    store.dispatch(keyUp(event.keyCode));
  }

  function ScrollHandler(event: Event) {
    //@ts-ignore
    store.dispatch(setZoomLevel(window.scrollY / window.innerHeight));
  }

  window.addEventListener("keydown", KeyDownEventHandler);
  window.addEventListener("keyup", KeyUpEventHandler);
  //@ts-ignore
  window.addEventListener("scroll", ScrollHandler);
  //window.addEventListener("mousedown", () => store.dispatch(mouseDown()));
  //window.addEventListener("mouseup", () => store.dispatch(mouseUp()));
  sagaMiddleware.run(rootSaga);

  return (store as unknown) as Store<RootState, TBLAction<any>>;
}
