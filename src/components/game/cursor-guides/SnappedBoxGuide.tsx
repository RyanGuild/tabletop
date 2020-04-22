import React from "react";
import BoxGuide from "./UnsnappedBoxGuide";
import SnapSelection from "./SnapSelection";
import { GuideProps } from "./index";

export default function (props: GuideProps) {
  return <SnapSelection Component={BoxGuide} {...props} />;
}
