import { Canvas } from "./components/canvas/Canvas.js";
import { Tools } from "./components/tools/Tools.js";

import CanvasContext from "./context/CanvasContext.js";

const App = () => {
  return (
    <CanvasContext>
      <Tools />
      <Canvas />
    </CanvasContext>
  );
};

export { App };
