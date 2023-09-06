import { createContext, useContext, useReducer } from "react";
import CanvasReducer from "../reducer/CanvasReducer";

type ContextProviderProps = {
  children: React.ReactNode;
};

const Context = createContext(
  {} as {
    color: string;
    dispatch: any;
    canvasSize: number;
    previousColor: string | null;
  }
);

const Provider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(CanvasReducer, {
    color: "black",
    canvasSize: 32,
    previousColor: "black",
    canvasBorder: "dotted",
  });

  const data = {
    ...state, //statelerin tamamı
    dispatch,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useCanvasContext = () => useContext(Context);

export default Provider;
