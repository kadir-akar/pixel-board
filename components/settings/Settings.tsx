import "./settings.css";

type propsType = {
  colorValue: (color: string) => void;
};

const Settings = ({ colorValue }: propsType) => {
  const changeBrushColor = (color: string) => {
    colorValue(color);
  };
  return (
    <div>
      <div className="settingsMenu">
        <form className="settingsMenuOption custom">
          <div>
            <input type="checkbox" />
            <span>16x16</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>32x32</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>64x64</span>
          </div>
        </form>
        <div>
          <input type="checkbox" />
          Custom Canvas Size
        </div>
        <div className="settingsMenuOption">Column</div>
        <input type="range" />
        <div className="settingsMenuOption">Row</div>
        <input type="range" />
        <div className="settingsMenuOption">
          <p>Select Color</p>
          <input
            type="color"
            onChange={(e) => {
              changeBrushColor(e.target.value);
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
