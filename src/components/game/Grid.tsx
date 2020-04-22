import React from "react";
import * as THREE from "three";
import { useThree } from "react-three-fiber";

const color = new THREE.Color("black");
export interface GridProps {
  size: number;
}

export default React.memo(({ size }: GridProps) => {
  let { scene } = useThree();
  scene.add(new THREE.GridHelper(size, size, color));
  return <></>;
});
