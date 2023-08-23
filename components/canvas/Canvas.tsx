import { useState } from "react";
import "./canvas.css";
import { Square } from "./square/Square";
type propsType = {
  color: string;
  canvasSize: number;
};

const Canvas = ({ color, canvasSize }: propsType) => {
  return (
    <div>
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
  );
};
export { Canvas };
