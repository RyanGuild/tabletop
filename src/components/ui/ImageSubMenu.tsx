import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ToolButton from "../prezentational/ToolButton";
import { GridOn, GridOff, PhotoSizeSelectLarge } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import setGridSnapEnabled from "../../actions/setGridSnapEnabled";
import setImageSubTool from "../../actions/setImageSubTool";
import setBackgroundImage from "../../actions/setBackgroundImage";
import addImageToStore from "../../actions/addImageToStore";
import { ImageSubTools } from "../../data/enums";

export default function () {
  const dispatch = useDispatch();
  const gridSnapEnabled = useSelector(
    (state: RootState) => state.gridSnapEnabled
  );
  const imageSubTool = useSelector((state: RootState) => state.imageSubTool);
  const images = useSelector((state: RootState) => state.imageStore);
  const backgroundImage = useSelector(
    (state: RootState) => state.backgroundImage
  );

  const bgImagesEntry = backgroundImage
    ? images.find((img) => (img.name = backgroundImage.name))
    : undefined;
  const indexOfBG = bgImagesEntry ? images.indexOf(bgImagesEntry) : -1;

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      for (let file of acceptedFiles) {
        let fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          let uri = fileReader.result?.toString();
          if (uri) {
            dispatch(addImageToStore(file.name, uri));
          }
        });
        fileReader.readAsDataURL(file);
      }
    },
    [dispatch]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  const { style, ...rootProps } = getRootProps();

  const setGridSnap = (nextGridSnapEnabled: boolean) => {
    dispatch(setGridSnapEnabled(nextGridSnapEnabled));
    return;
  };
  const setTool = (nextTool: ImageSubTools) => {
    dispatch(setImageSubTool(nextTool));
    return;
  };

  const handleSelectImage = (index: number) => {
    let nextSelection = selectedImage === index ? null : index;

    if (ImageSubTools.BG === imageSubTool) {
      nextSelection
        ? dispatch(setBackgroundImage(images[nextSelection]))
        : dispatch(setBackgroundImage(null));
    }
    setSelectedImage(nextSelection);
  };
  return (
    <div>
      <div
        style={{
          border: "5px dashed #2196F3",
          borderRadius: "10px",
          height: "80%",
          width: "195px",
          padding: "10px",
          ...style,
        }}
        {...rootProps}
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop Images Here</p> : <p>Drag Images Here</p>}
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "195px",
        }}
      >
        {images.map(({ name, uri }, index) => (
          <span key={index} style={{ margin: "3px" }}>
            <ToolButton
              name={name}
              clickHandler={handleSelectImage.bind(null, index)}
              isToggle={true}
              selected={
                imageSubTool === ImageSubTools.BG
                  ? index === indexOfBG
                  : selectedImage === index
              }
            >
              <img
                src={uri}
                alt={name}
                style={{ width: "25px", height: "25px" }}
              />
            </ToolButton>
          </span>
        ))}
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <span style={{ margin: "3px" }}>
          <ToolButton
            isToggle={true}
            name={"Snap To Grid"}
            selected={gridSnapEnabled}
            clickHandler={() =>
              gridSnapEnabled ? setGridSnap(false) : setGridSnap(true)
            }
          >
            {gridSnapEnabled ? <GridOn /> : <GridOff />}
          </ToolButton>
        </span>
        <span style={{ margin: "3px" }}>
          <ToolButton
            isToggle={true}
            name={"Background Image"}
            selected={imageSubTool === ImageSubTools.BG}
            clickHandler={() => setTool(ImageSubTools.BG)}
          >
            <span>BG</span>
          </ToolButton>
        </span>
        <span style={{ margin: "3px" }}>
          <ToolButton
            isToggle={true}
            name={"Image Paint"}
            selected={imageSubTool === ImageSubTools.Paint}
            clickHandler={() => setTool(ImageSubTools.Paint)}
          >
            <PhotoSizeSelectLarge />
          </ToolButton>
        </span>
      </div>
    </div>
  );
}
