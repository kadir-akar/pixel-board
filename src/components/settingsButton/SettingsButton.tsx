import { useEffect, useState } from "react";
import styles from "./settingsButton.module.css";
import { Settings } from "../settings/Settings";
import { IoIosSettings } from "react-icons/io";

const SettingsButton = () => {
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
        document.querySelector(".gear")?.classList.add("active-tool");
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [settings]);
  return (
    <div className={styles.settings}>
      <div className={`${styles.gear} tool gear`} onClick={setSettings}>
        <IoIosSettings />
      </div>
      <span className={styles["tool-number"]}>1</span>
      {settings ? <Settings /> : null}
    </div>
  );
};

export { SettingsButton };
