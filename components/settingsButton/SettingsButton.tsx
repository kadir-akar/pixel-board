import { useState } from "react";
import "./settingsButton.css";
import { Settings } from "../settings/Settings";
import { IoIosSettings } from "react-icons/io";

type propsType = {
  colorValue: (color: string) => void;
};

const SettingsButton = ({ colorValue }: propsType) => {
  const [settings, openSettings] = useState(false);
  const setSettings = () => {
    openSettings(!settings);
  };
  return (
    <div className="settings">
      <div className="gear" onClick={setSettings}>
        <IoIosSettings />
      </div>
      {settings ? <Settings colorValue={colorValue} /> : null}
    </div>
  );
};

export { SettingsButton };
