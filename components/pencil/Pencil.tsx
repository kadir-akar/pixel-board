import React, { useEffect, useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import "./pencil.css";

type propsType = {
  setColorValue: (color: string) => void;
};

const Pencil = ({ setColorValue }: propsType) => {
  const activeTool = () => {
    const pencil = document.querySelector(".pencil");
    pencil?.classList.add("active-tool");
  };
  const removeActiveTool = () => {
    const eraser = document.querySelector(".eraser");
    eraser?.classList.remove("active-tool");
  };
  const [toggle, setToggle] = useState(false);
  const togglePencil = () => {
    setToggle(!toggle);
    activeTool();
    removeActiveTool();
  };
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "2") {
        setToggle(!toggle);
        activeTool();
        1;
        removeActiveTool();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [toggle]);
  return (
    <div>
      <div className="tool pencil">
        <BiSolidPencil onClick={togglePencil} />
      </div>
      <span className="tool-number">2</span>
      {toggle ? (
        <div className="pencil-options">
          <div className="pencil-option">
            <input type="color" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { Pencil };
