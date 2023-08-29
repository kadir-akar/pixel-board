import { useEffect } from "react";
import { BiSolidPencil } from "react-icons/bi";
import "./pencil.css";
import { Palette } from "./palette/palette";
import { useCanvasContext } from "../../context/CanvasContext";

const Pencil = () => {
  const { color } = useCanvasContext();

  const activeTool = () => {
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
  return (
    <div>
      <div className="tool pencil">
        <BiSolidPencil onClick={togglePencil} />
      </div>
      <span className="tool-number">2</span>
      {/* <Palette /> */}
    </div>
  );
};

export { Pencil };
