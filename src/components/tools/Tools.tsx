import React, { useEffect } from "react";
import { SettingsButton } from "../settingsButton/SettingsButton";
import { Pencil } from "../pencil/Pencil";
import { Eraser } from "../eraser/Eraser";
import "./tools.css";

type propsType = {
  setCanvasSize: (size: number) => void;
  setColor: (color: string) => void;
};
const Tools = ({ setCanvasSize, setColor }: propsType) => {
  return (
    <div>
      <div className="tools">
        <SettingsButton
          setColorValue={setColor}
          setCanvasSize={setCanvasSize}
        />
        <Pencil setColorValue={setColor} />
        <Eraser setColorValue={setColor} />
      </div>
    </div>
  );
};

export { Tools };
