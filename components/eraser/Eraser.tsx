import React from "react";
import { BsFillEraserFill } from "react-icons/bs";
const Eraser = () => {
  return (
    <div>
      <div className="tool eraser">
        <BsFillEraserFill />
      </div>
      <span className="tool-number">3</span>
    </div>
  );
};

export { Eraser };
