import { useEffect, useState } from "react";
import "./settingsButton.css";
import { Settings } from "../settings/Settings";
import { IoIosSettings } from "react-icons/io";

type propsType = {
  setColorValue: (color: string) => void;
  setCanvasSize: (size: number) => void;
};

const SettingsButton = ({ setColorValue, setCanvasSize }: propsType) => {
  const [settings, openSettings] = useState(true);
  const setSettings = () => {
    openSettings(!settings);
  };
  useEffect(() => {
    if (settings) {
      const gear = document.querySelector(".gear");
      gear?.classList.add("active-tool");
    } else {
      const gear = document.querySelector(".gear");
      gear?.classList.remove("active-tool");
    }
  }, [settings]);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "1") {
        openSettings(!settings);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [settings]);
  return (
    <div className="settings">
      <div className="tool gear" onClick={setSettings}>
        <IoIosSettings />
      </div>
      <span className="tool-number">1</span>
      {settings ? (
        <Settings colorValue={setColorValue} setCanvasSize={setCanvasSize} />
      ) : null}
    </div>
  );
};

export { SettingsButton };
