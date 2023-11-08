import { useEffect } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { useCanvasContext } from "../../../context/CanvasContext";

import { activatePencil, deActivateEraser } from "../../../utils/activeTool";

const Pencil = () => {
  const { previousColor, dispatch } = useCanvasContext();
  const togglePencil = () => {
    dispatch({ type: "SET_COLOR", payload: previousColor });
    activatePencil();
    deActivateEraser();
  };
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "2") {
        togglePencil();
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [togglePencil]);
  useEffect(() => {
    activatePencil();
  }, []);

  return (
    <div className="tool pencil" onClick={togglePencil}>
      <BiSolidPencil onClick={togglePencil} />
      <span>2</span>
    </div>
  );
};

export { Pencil };
