import styles from "./palette.module.css";
import { useCanvasContext } from "../../../../context/CanvasContext";

import { useState } from "react";

const Palette = () => {
  const { dispatch } = useCanvasContext();
  const [selectedColor, setSelectedColor] = useState(""); // Seçilen rengi saklamak için bir state

  const handleColorChange = (e: any) => {
    setSelectedColor(e.target.value);
  };

  const handleApplyColor = () => {
    if (selectedColor) {
      dispatch({ type: "SET_AVAILABLE_COLORS", payload: selectedColor });
      setSelectedColor("");
    }
  };

  return (
    <div className={styles.palette}>
      <input type="color" onChange={handleColorChange} />
      <button className={styles["save-button"]} onClick={handleApplyColor}>
        save
      </button>
    </div>
  );
};

export default Palette;

export { Palette };
