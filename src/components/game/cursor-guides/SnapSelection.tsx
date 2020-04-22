import React from "react";
import { GuideProps } from "./index";
import { Vector3 } from "three";

export default function ({
  Component,
  selection,
  ...props
}: GuideProps & { Component: React.ComponentType<GuideProps> }) {
  if (!selection[0] || !selection[1]) return null;
  const snappedSelection = [
    new Vector3(
      Math.floor(selection[0].x) + 0.5,
      selection[0].y,
      Math.floor(selection[0].z) + 0.5
    ),
    new Vector3(
      Math.floor(selection[1].x) + 0.5,
      selection[1].y,
      Math.floor(selection[1].z) + 0.5
    ),
  ];
  return <Component selection={snappedSelection} {...props} />;
}
