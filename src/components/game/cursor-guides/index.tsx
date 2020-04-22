import { Vector3, Color } from "three";

export type GuideProps = {
  selection: Vector3[];
  color: Color;
};

export { default as SnappedBoxGuide } from "./SnappedBoxGuide";
export { default as UnsnappedBoxGuide } from "./UnsnappedBoxGuide";
