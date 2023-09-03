import styles from "./palette.module.css";

import { useCanvasContext } from "../../../context/CanvasContext";
const Palette = () => {
  const { dispatch } = useCanvasContext();

  const changeBrushColor = (color: string) => {
    dispatch({ type: "SET_COLOR", payload: color });
  };
  return (
    <div className={styles.palette}>
      <form>
        <input
          type="color"
          className={styles["color-picker"]}
          onBlur={(e) => {
            if (e.target instanceof HTMLInputElement) {
              changeBrushColor(e.target.value);
            }
          }}
        />
      </form>
    </div>
  );
};

export { Palette };
