import React from "react";
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
        <SettingsButton colorValue={setColor} setCanvasSize={setCanvasSize} />
        <Pencil />
        <Eraser />
      </div>
    </div>
  );
};

export { Tools };
