import "./availablepalette.css";
import { useCanvasContext } from "../../../../context/CanvasContext";

interface Props {
  color: string;
}

const AvailablePalette = ({ color }: Props) => {
  const { dispatch } = useCanvasContext();

  const changeBrushColor = (color: string) => {
    dispatch({ type: "SET_COLOR", payload: color });
    dispatch({ type: "SET_PREVIOUS_COLOR", payload: color });
  };
  const handleDeleteColor = (color: string) => {
    dispatch({ type: "REMOVE_AVAILABLE_COLOR", payload: color });
  };

  return (
    <div className="available-palette-board">
      <div
        className="available-palette"
        onClick={() => {
          changeBrushColor(color);
        }}
        style={{ backgroundColor: color }}
      >
        <button
          className="delete-color"
          onClick={() => handleDeleteColor(color)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default AvailablePalette;
