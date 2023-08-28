import React from "react";
import { SettingsButton } from "../settingsButton/SettingsButton";
import { Pencil } from "../pencil/Pencil";
import { Eraser } from "../eraser/Eraser";
import "./tools.css";

import { useCanvasContext } from "../../context/CanvasContext";
const Tools = () => {
  const { dispatch } = useCanvasContext();
  //reducer lazım
  const setColor = (color: string) => {
    dispatch({ type: "SET_COLOR", payload: color });
  };

  return (
    <div>
      <div className="tools">
        <SettingsButton />
        <Pencil setColorValue={setColor} />
        <Eraser />
      </div>
    </div>
  );
};

export { Tools };
