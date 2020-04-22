import React, { useState } from "react";
import { Vector3, Color } from "three";
import "react-three-fiber";
import { a, animated } from "@react-spring/three";
import { CURSOR_Y, BG_Y, LAYER_HEIGHT } from "../../data/constants";
import Throttle from "../../utils/throttle";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import mouseDown from "../../actions/mouseDown";
import mouseUp from "../../actions/mouseUp";
import mouseMove from "../../actions/mouseMove";
import { PaintSubTools, Tools } from "../../data/enums";
import { SnappedBoxGuide, UnsnappedBoxGuide } from "./cursor-guides";

function PointerData(event: any) {
  return {
    matVector: event.point,
    clientX: event.clientX,
    clientY: event.clientY,
  };
}

export type CursorProps = {
  size: number;
};

export default function ({ size }: CursorProps) {
  const dispatch = useDispatch();
  const activeTool = useSelector((state: RootState) => state.activeTool);
  const paintSubTool = useSelector((state: RootState) => state.paintSubTool);
  const selection = useSelector((state: RootState) => state.selection || []);
  const paintColor = useSelector((state: RootState) => state.paintColor);
  const paintGridSnapEnabled = useSelector(
    (state: RootState) => state.gridSnapEnabled
  );

  const [cursorPoint, setCursorPoint] = useState<null | Vector3>(null);
  const [pointerDown, setPointerDown] = useState(false);

  const oddSize = size % 2 === 0;

  const PointerMoveHandler = Throttle((event: any) => {
    if (activeTool === Tools.Move) dispatch(mouseMove(PointerData(event)));
    if (paintGridSnapEnabled) {
      if (oddSize) {
        setCursorPoint(
          new Vector3(
            Math.floor(event.point.x) + 0.5,
            CURSOR_Y,
            Math.floor(event.point.z) + 0.5
          )
        );
      } else {
        setCursorPoint(
          new Vector3(
            Math.round(event.point.x),
            CURSOR_Y,
            Math.round(event.point.z)
          )
        );
      }
    } else {
      setCursorPoint(new Vector3(event.point.x, CURSOR_Y, event.point.z));
    }
  }, 50);

  const PointerUpHandler = (event: any) => {
    setPointerDown(false);
    dispatch(
      mouseUp({
        matVector: new Vector3(event.point.x, CURSOR_Y, event.point.z),
        clientX: event.clientX,
        clientY: event.clientY,
      })
    );
  };

  const PointerDownHandler = (event: any) => {
    setPointerDown(true);
    dispatch(
      mouseDown({
        matVector: new Vector3(event.point.x, CURSOR_Y, event.point.z),
        clientX: event.clientX,
        clientY: event.clientY,
      })
    );
  };

  return (
    <>
      <a.group
        onPointerMove={PointerMoveHandler}
        onPointerDown={PointerDownHandler}
        onPointerUp={PointerUpHandler}
        onPointerLeave={PointerUpHandler}
      >
        <mesh position={new Vector3(0, BG_Y, 0)}>
          <boxBufferGeometry
            attach="geometry"
            args={[size, LAYER_HEIGHT, size]}
          />
        </mesh>
      </a.group>

      {cursorPoint ? <Selector cursorPoint={cursorPoint} /> : null}
      {pointerDown && selection && cursorPoint && activeTool === Tools.Paint ? (
        <PaintGuideSwitch
          tool={paintSubTool}
          gridSnapEnabled={paintGridSnapEnabled}
          selection={[selection[0], cursorPoint]}
          color={new Color(paintColor)}
        />
      ) : null}
    </>
  );
}

const PaintGuideSwitch = ({
  tool,
  gridSnapEnabled,
  ...props
}: { tool: PaintSubTools; gridSnapEnabled: boolean } & GuideProps) => {
  switch (tool) {
    case PaintSubTools.Box:
      return gridSnapEnabled ? (
        <SnappedBoxGuide {...props} />
      ) : (
        <UnsnappedBoxGuide {...props} />
      );
    case PaintSubTools.Circle:
      return gridSnapEnabled ? (
        <SnappedCircleGuide {...props} />
      ) : (
        <UnsnappedCircleGuide {...props} />
      );
    case PaintSubTools.Erase:
      return gridSnapEnabled ? (
        <SnappedBoxGuide {...{ ...props, color: new Color("grey") }} />
      ) : (
        <UnsnappedBoxGuide {...{ ...props, color: new Color("grey") }} />
      );
    default:
      return null;
  }
};

type GuideProps = {
  selection: Vector3[];
  color: Color;
};

const SnappedCircleGuide = ({ selection, color }: GuideProps) => {
  if (!selection[0] || !selection[1]) return null;
  const [start, end] = selection;
  return <animated.mesh></animated.mesh>;
};

const UnsnappedCircleGuide = ({ selection, color }: GuideProps) => {
  if (!selection[0] || !selection[1]) return null;
  const [start, end] = selection;
  const SelectVec = new Vector3().subVectors(start, end);
  const CenterVec = SelectVec.setLength(SelectVec.length() / 2);
  const width = Math.abs(start.x - end.x);
  const height = Math.abs(start.z - end.z);

  return (
    <animated.mesh position={CenterVec}>
      <cylinderBufferGeometry
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
};

type SelectorProps = {
  cursorPoint: Vector3;
};

const Selector = ({ cursorPoint }: SelectorProps) => (
  <animated.mesh position={cursorPoint}>
    <boxBufferGeometry attach="geometry" args={[1, LAYER_HEIGHT, 1]} />
    <meshPhongMaterial
      attach="material"
      color={new Color("grey")}
      opacity={0.9}
      transparent
    />
  </animated.mesh>
);
