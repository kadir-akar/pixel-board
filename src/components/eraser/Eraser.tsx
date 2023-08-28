import { useEffect } from "react";
import { BsFillEraserFill } from "react-icons/bs";
import { useCanvasContext } from "../../context/CanvasContext";

const Eraser = () => {
  const { dispatch } = useCanvasContext();
  const activeTool = () => {
    const eraser = document.querySelector(".eraser");
    eraser?.classList.add("active-tool");
  };
  const removeActiveTool = () => {
    const pencil = document.querySelector(".pencil");
    pencil?.classList.remove("active-tool");
  };
  const erased = () => {
    dispatch({ type: "SET_COLOR", payload: "#dad7d7" });
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
