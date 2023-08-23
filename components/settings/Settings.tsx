import "./settings.css";
type ColorChangeEvent = React.ChangeEvent<HTMLInputElement>;
type propsType = {
  colorValue: (color: string) => void;
  setCanvasSize: (size: number) => void;
};

const Settings = ({ colorValue, setCanvasSize }: propsType) => {
  const changeBrushColor = (color: string) => {
    colorValue(color);
  };
  const canvasSize = (size: number) => {
    setCanvasSize(size);
    const sizeCheckBoxes = document.querySelectorAll(".size-checkbox");
    sizeCheckBoxes.forEach((checkbox) => {
      // checkbox.checked = true;
    });
  };
  return (
    <div>
      <div className="settingsMenu">
        <form className="settingsMenuOption custom">
          <div>
            <h3 className="option-header">Canvas Size</h3>
            <input
              type="checkbox"
              className="size-checkbox"
              id="8"
              onChange={() => {
                canvasSize(16);
              }}
            />
            <span>16x16</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="size-checkbox"
              id="16"
              onChange={() => {
                canvasSize(32);
              }}
            />
            <span>32x32</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="size-checkbox"
              id="32"
              onChange={() => {
                canvasSize(64);
              }}
            />
            <span>64x64</span>
          </div>
        </form>
        <div className="settingsMenuOption ">
          <h3 className="option-header">Border settings</h3>
          <div className="border-option">
            <input type="checkbox" />
            <span>none</span>
          </div>
          <div className="border-option">
            <input type="checkbox" />
            <span>dot</span>
          </div>
          <div className="border-option">
            <input type="checkbox" />
            <span>solid</span>
          </div>
        </div>
        <div className="settingsMenuOption">
          <h3 className="option-header">Select Color</h3>
          <input
            type="color"
            onBlur={(e) => {
              if (e.target instanceof HTMLInputElement) {
                changeBrushColor(e.target.value);
              }
            }}
          />
        </div>
        <div className="settingsMenuOption">
          <button>Clear</button>
        </div>
        <div className="settingsMenuOption">
          <button>Random Color</button>
        </div>
      </div>
    </div>
  );
};

export { Settings };
