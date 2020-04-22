import React from "react";
import "react-three-fiber";

import { TILE_PAINT_Y, LAYER_HEIGHT } from "../../data/constants";
import { Vector3, Color } from "three";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

export type TilePaintLayerProps = {
  size: number;
  originOffset: THREE.Vector3;
};

export default function ({ size, originOffset }: TilePaintLayerProps) {
  const tilePaintData = useSelector(
    (state: RootState) => state.tilePaintData,
    (a, b) => a?.update !== b?.update
  );
  const dataArr = [...tilePaintData?.Data()];
  if (dataArr.length === 0) return null;
  return (
    <>
      {dataArr.map((color, index) => {
        if (color === null) return null;
        let z = index % size;
        let x = Math.floor(index / size);
        let y = TILE_PAINT_Y;
        return (
          <mesh
            key={index}
            position={new Vector3().addVectors(
              new Vector3(x, y, z),
              originOffset
            )}
          >
            <boxBufferGeometry attach="geometry" args={[1, LAYER_HEIGHT, 1]} />
            <meshPhysicalMaterial attach="material" color={new Color(color)} />
          </mesh>
        );
      })}
    </>
  );
}
