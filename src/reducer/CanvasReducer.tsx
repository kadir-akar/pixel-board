export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "SET_CANVAS_SIZE":
      return {
        ...state,
        canvasSize: action.payload,
      };
  }
}
