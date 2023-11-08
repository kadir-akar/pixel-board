import { createContext, useContext, useReducer } from "react";
import CanvasReducer from "../reducer/CanvasReducer";

type ContextProviderProps = {
  children: React.ReactNode;
};

const Context = createContext(
  {} as {
    color: string;
    dispatch: any;
    canvasSize: number[];
    previousColor: string | null;
    canvasBorder: string;
    availableColors: string[];
  }
);

const Provider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(CanvasReducer, {
    color: "black",
    canvasSize: [32, 32],
    previousColor: "black",
    canvasBorder: "dotted",
    availableColors: [
      "black",
      "#F5B0B0",
      "#4464AD",
      "#A4B0F5",
      "#F58F29",
      "#7D4600",
      "#F5E6B0",
    ],
  });

  const data = {
    ...state,
    dispatch,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useCanvasContext = () => useContext(Context);

export default Provider;
