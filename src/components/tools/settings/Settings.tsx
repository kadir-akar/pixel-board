import styles from "./settings.module.css";
import { useCanvasContext } from "../../../context/CanvasContext";
const Settings = () => {
  const { dispatch } = useCanvasContext();
  const canvas = document.querySelectorAll(
    ".square"
  ) as NodeListOf<HTMLCanvasElement>;
  const clearCanvas = () => {
    //confirm then clear
    if (window.confirm("Are you sure you want to clear the canvas?")) {
      canvas.forEach((canvas) => {
        canvas.style.backgroundColor = "#dad7d7";
      });
    }
  };

  const changeCanvasSize = (size: number) => {
    dispatch({ type: "SET_CANVAS_SIZE", payload: size });
  };
  const canvasSizes = document.querySelectorAll(
    ".canvas-size"
  ) as NodeListOf<HTMLInputElement>;
  canvasSizes.forEach((size) => {
    size.addEventListener("click", () => {
      if (!size.checked) {
        size.checked = true;
      }
      canvasSizes.forEach((otherSize) => {
        if (otherSize !== size) {
          otherSize.checked = false;
        }
      });
    });
  });
  return (
    <div>
      <div className={styles.settingsMenu}>
        <form className={(styles.settingsMenuOption, styles.canvasSize)}>
          <div>
            <h3 className={styles["option-header"]}>Canvas Size</h3>
            <input
              type="checkbox"
              className={`canvas-size styles["size-checkbox"]`}
              id="16"
              onChange={() => {
                changeCanvasSize(16);
              }}
            />
            <span>16x16</span>
          </div>
          <div>
            <input
              type="checkbox"
              className={`canvas-size styles["size-checkbox"]`}
              id="32"
              onChange={() => {
                changeCanvasSize(32);
              }}
            />
            <span>32x32</span>
          </div>
          <div>
            <input
              type="checkbox"
              className={`canvas-size styles["size-checkbox"]`}
              id="64"
              onChange={() => {
                changeCanvasSize(64);
              }}
            />
            <span>36x64</span>
          </div>
        </form>

        <div className={styles.settingsMenuOption}>
          <button onClick={clearCanvas}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export { Settings };
