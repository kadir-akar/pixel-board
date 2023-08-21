import { Canvas } from "../components/canvas/Canvas.tsx";
import { SettingsButton } from "../components/settingsButton/SettingsButton.tsx";
import { useState } from "react";
const App = () => {
  const [color, setColor] = useState<string>("#000000");
  return (
    <div>
      <Canvas color={color} />
      <SettingsButton colorValue={setColor} />
    </div>
  );
};

export { App };
