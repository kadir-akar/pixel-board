import { Canvas } from "./components/canvas/Canvas.tsx";
import { Tools } from "./components/tools/Tools.tsx";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState<string>("#000000");
  const [canvasSize, setCanvasSize] = useState<number>(32);

  return (
    <div>
      <Canvas color={color} canvasSize={canvasSize} />
      <Tools setCanvasSize={setCanvasSize} setColor={setColor} />
    </div>
  );
};

export { App };
