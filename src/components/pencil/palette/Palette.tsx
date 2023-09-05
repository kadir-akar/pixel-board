import styles from "./palette.module.css";

import { useCanvasContext } from "../../../context/CanvasContext";
// import { useEffect } from "react";

type PaletteProps = {
  togglePencil: () => void;
};

const Palette = ({ togglePencil }: PaletteProps) => {
  const { dispatch } = useCanvasContext();

  const changeBrushColor = (color: string) => {
    dispatch({ type: "SET_COLOR", payload: color });
    dispatch({ type: "SET_PREVIOUS_COLOR", payload: color });
  };
  return (
    <div className={styles.palette}>
      <form>
        <input
          type="color"
          className={styles["color-picker"]}
          onClick={() => {
            togglePencil();
          }}
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
