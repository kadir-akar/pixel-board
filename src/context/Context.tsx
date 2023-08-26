import React, { createContext, useContext, useState } from "react";

// Bağlam oluşturma
const AppContext = createContext({
  color: "#000000",
  setColor: (color: string) => {},
  canvasSize: 32,
  setCanvasSize: (size: number) => {},
} as {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  canvasSize: number;
  setCanvasSize: React.Dispatch<React.SetStateAction<number>>;
});

// Bağlam Sağlayıcı bileşeni
const AppProvider = ({ children }) => {
  const [color, setColor] = useState<string>("#000000");
  const [canvasSize, setCanvasSize] = useState<number>(32);

  return (
    <AppContext.Provider value={{ color, setColor, canvasSize, setCanvasSize }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useAppContext };
