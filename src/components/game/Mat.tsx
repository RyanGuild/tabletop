import React from "react";
import Grid from "./Grid";
import Cursor from "./Cursor";
import TilePaintLayer from "./TilePaintLayer";
import * as THREE from "three";

export default ({ size }: { size: number }) => {
  const originOffset = new THREE.Vector3(
    (size / 2) * -1 + 0.5,
    0,
    (size / 2) * -1 + 0.5
  );
  return (
    <>
      <Grid size={size} />
      <Cursor size={size} />
      <TilePaintLayer size={size} originOffset={originOffset} />
    </>
  );
};
