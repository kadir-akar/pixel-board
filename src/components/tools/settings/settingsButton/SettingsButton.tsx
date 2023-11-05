import { useEffect, useState } from "react";
import { Settings } from "../Settings";
import { IoIosSettings } from "react-icons/io";

const SettingsButton = () => {
  const [settings, openSettings] = useState(false);

  const setSettings = () => {
    openSettings(!settings);
  };

  useEffect(() => {
    const gear = document.querySelector(".gear");

    if (settings) {
      gear?.classList.add("active-tool");
    } else {
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
    <div>
      <div className="tool gear" onClick={setSettings}>
        <IoIosSettings />
      </div>
      <span className="tool-number">1</span>
      {settings ? <Settings /> : null}
    </div>
  );
};

export { SettingsButton };
