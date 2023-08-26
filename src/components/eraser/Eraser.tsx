import React, { useEffect } from "react";
import { BsFillEraserFill } from "react-icons/bs";

type propsType = {
  setColorValue: (color: string) => void;
};

const Eraser = ({ setColorValue }: propsType) => {
  const activeTool = () => {
    const eraser = document.querySelector(".eraser");
    eraser?.classList.add("active-tool");
  };
  const removeActiveTool = () => {
    const pencil = document.querySelector(".pencil");
    pencil?.classList.remove("active-tool");
  };
  const erased = () => {
    setColorValue("#dad7d7");
  };
  const toggleEraser = () => {
    erased();
    activeTool();
    removeActiveTool();
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "3") {
        erased();
        removeActiveTool();
        activeTool();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div>
      <div className="tool eraser" onClick={toggleEraser}>
        <BsFillEraserFill />
      </div>
      <span className="tool-number">3</span>
    </div>
  );
};

export { Eraser };
