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
    case "SET_PREVIOUS_COLOR":
      return {
        ...state,
        previousColor: action.payload,
      };
    case "SET_CANVAS_BORDER":
      return {
        ...state,
        canvasBorder: action.payload,
      };
    case "SET_AVAILABLE_COLORS":
      return {
        ...state,
        availableColors: [...state.availableColors, action.payload],
      };
    case "REMOVE_AVAILABLE_COLOR":
      return {
        ...state,
        availableColors: state.availableColors.filter(
          (color: string) => color !== action.payload
        ),
      };
    default:
      return state;
  }
}
