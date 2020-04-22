import React, { useEffect, useRef } from "react";
import { useThree, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

export default function CameraController() {
  const cameraRef = useRef<THREE.Camera>(null);
  const { setDefaultCamera, camera } = useThree();
  const cameraPosition: THREE.Vector3 = useSelector(
    (state: RootState) => state.cameraPosition
  );

  useEffect(() => {
    if (cameraRef.current && cameraRef.current !== camera) {
      setDefaultCamera(cameraRef.current as any);
    }
  }, [camera, setDefaultCamera]);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.x = cameraPosition.x;
      cameraRef.current.position.y = cameraPosition.y;
      cameraRef.current.position.z = cameraPosition.z;
    }
  });

  return (
    <perspectiveCamera
      ref={cameraRef}
      args={[75, 1, 0.1, 1000]}
      rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90), 0, 0)}
    ></perspectiveCamera>
  );
}
