import "./canvas.css";
import { Square } from "./square/Square";
import { Palette } from "../tools/pencil/palette/Palette";
import { useCanvasContext } from "../../context/CanvasContext";

const Canvas = () => {
  const { canvasSize, color } = useCanvasContext();

  return (
    <div>
      <div>
        <div className="palette-board">
          <Palette />
          <Palette />
          <Palette />
          <Palette />
        </div>
        <div className="canvas">
          {Array(canvasSize)
            .fill(0)
            .map((_, i) => {
              return (
                <div className="row" key={i}>
                  {Array(canvasSize)
                    .fill(0)
                    .map((_, j) => {
                      return <Square color={color} key={j} />;
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export { Canvas };
