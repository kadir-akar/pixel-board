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
  }
);

const Provider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(CanvasReducer, {
    color: "black",
    canvasSize: 32,
  });

  const data = {
    ...state, //statelerin tamamı
    dispatch,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useCanvasContext = () => useContext(Context);

export default Provider;
