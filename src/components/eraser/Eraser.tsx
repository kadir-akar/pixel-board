import { useEffect } from "react";
import { BsFillEraserFill } from "react-icons/bs";
import { useCanvasContext } from "../../context/CanvasContext";

const Eraser = () => {
  const { dispatch, color } = useCanvasContext();
  const activeTool = () => {
    const eraser = document.querySelector(".eraser");
    eraser?.classList.add("active-tool");
    dispatch({ type: "SET_PREVIOUS_COLOR", payload: color });
    dispatch({ type: "SET_COLOR", payload: "#dad7d7" });
  };
  const removeActiveTool = () => {
    const pencil = document.querySelector(".pencil");
    pencil?.classList.remove("active-tool");
  };
  const toggleEraser = () => {
    activeTool();
    removeActiveTool();
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "3") {
        toggleEraser();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [toggleEraser]);
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
