import { useState } from "react";
import "./settingsButton.css";
import { Settings } from "../settings/Settings";
import { IoIosSettings } from "react-icons/io";

type propsType = {
  colorValue: (color: string) => void;
  setCanvasSize: (size: number) => void;
};

const SettingsButton = ({ colorValue, setCanvasSize }: propsType) => {
  const [settings, openSettings] = useState(true);
  const setSettings = () => {
    openSettings(!settings);
  };

  return (
    <div className="settings">
      <div className="tool gear" onClick={setSettings}>
        <IoIosSettings />
      </div>
      <span className="tool-number">1</span>
      {/* <h3 className="tool-number center">1</h3> */}
      {settings ? (
        <Settings colorValue={colorValue} setCanvasSize={setCanvasSize} />
      ) : null}
    </div>
  );
};

export { SettingsButton };
