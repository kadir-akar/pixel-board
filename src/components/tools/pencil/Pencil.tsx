import { useEffect } from "react";
import { BiSolidPencil } from "react-icons/bi";

import { useCanvasContext } from "../../../context/CanvasContext";

const Pencil = () => {
  const { previousColor, dispatch } = useCanvasContext();
  const activeTool = () => {
    dispatch({ type: "SET_COLOR", payload: previousColor });
    const pencil = document.querySelector(".pencil");
    pencil?.classList.add("active-tool");
  };
  const removeActiveTool = () => {
    const eraser = document.querySelector(".eraser");
    eraser?.classList.remove("active-tool");
  };
  const togglePencil = () => {
    activeTool();
    removeActiveTool();
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
    activeTool();
  }, []);

  return (
    <div>
      <div className="tool pencil">
        <BiSolidPencil onClick={togglePencil} />
      </div>
      <span>2</span>
    </div>
  );
};

export { Pencil };
