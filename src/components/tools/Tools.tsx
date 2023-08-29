import { SettingsButton } from "../settingsButton/SettingsButton";
import { Pencil } from "../pencil/Pencil";
import { Eraser } from "../eraser/Eraser";
import styles from "./tools.module.css";

const Tools = () => {
  return (
    <div>
      <div className={styles.tools}>
        <SettingsButton />
        <Pencil />
        <Eraser />
      </div>
    </div>
  );
};

export { Tools };
