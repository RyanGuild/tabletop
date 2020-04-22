import { Action } from "redux";
import { ActionTypes } from "./enums";
import { Vector3 } from "three";

export type TBLAction<T = any> = Action<ActionTypes> & { payload: T };

export type PointerData = {
  matVector: Vector3;
  clientX: number;
  clientY: number;
};

export type ImageStoreEntry = {
  name: string;
  uri: string;
};
