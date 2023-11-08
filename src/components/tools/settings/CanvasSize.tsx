import { useCanvasContext } from "../../../context/CanvasContext";
const CanvasSize = () => {
  const { canvasSize } = useCanvasContext();
  const { dispatch } = useCanvasContext();
  const columnSize = canvasSize[0];
  const rowSize = canvasSize[1];

  return (
    <div className="canvas-size">
      <div className="column-size">
        <h5>column size</h5>
        <div className="adj-buttons">
          <button
            onClick={() => {
              dispatch({
                type: "SET_CANVAS_SIZE",
                payload: [columnSize + 1, rowSize],
              });
            }}
          >
            +
          </button>
          <span>{columnSize}</span>
          <button
            onClick={() => {
              dispatch({
                type: "SET_CANVAS_SIZE",
                payload: [columnSize - 1, rowSize],
              });
            }}
          >
            -
          </button>
        </div>
      </div>
      <div className="row-size">
        <h5>row size</h5>
        <div className="adj-buttons">
          <button
            onClick={() => {
              dispatch({
                type: "SET_CANVAS_SIZE",
                payload: [columnSize, rowSize + 1],
              });
            }}
          >
            +
          </button>
          <span>{rowSize}</span>
          <button
            onClick={() => {
              dispatch({
                type: "SET_CANVAS_SIZE",
                payload: [columnSize, rowSize - 1],
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export { CanvasSize };
