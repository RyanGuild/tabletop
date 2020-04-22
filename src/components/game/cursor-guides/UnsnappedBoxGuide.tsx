import React from "react";
import { GuideProps } from "./index";
import { CURSOR_Y, LAYER_HEIGHT } from "../../../data/constants";
import { Vector3 } from "three";
import "react-three-fiber";
import { animated } from "@react-spring/three";

function BoxGuide({ selection, color }: GuideProps) {
  if (!selection[0] || !selection[1]) return null;
  const [start, end] = selection;
  if (start.equals(end)) return null;
  const CenterVec = new Vector3(
    (start.x + end.x) / 2,
    CURSOR_Y,
    (start.z + end.z) / 2
  );
  const width = Math.abs(start.x - end.x) + 1;
  const height = Math.abs(start.z - end.z) + 1;

  return (
    <animated.mesh position={CenterVec}>
      <boxBufferGeometry
        attach="geometry"
        args={[width, LAYER_HEIGHT, height]}
      />
      <meshPhongMaterial
        attach="material"
        color={color}
        opacity={0.7}
        transparent
      />
    </animated.mesh>
  );
}

export default BoxGuide as React.FunctionComponent<GuideProps>;
