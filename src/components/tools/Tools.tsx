import { Pencil } from "./pencil/Pencil";
import { Eraser } from "./eraser/Eraser";
import { CanvasSize } from "./settings/CanvasSize";
import { ClearCanvas } from "./settings/ClearCanvas";

import "./tools.css";

const Tools = () => {
  return (
    <div>
      <div className="tools">
        <div className="pencil-eraser">
          <Pencil />
          <Eraser />
        </div>
        <CanvasSize />
        <div>
          <ClearCanvas />
        </div>
      </div>
    </div>
  );
};

export { Tools };
