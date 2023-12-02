import React, { useState, useEffect } from "react";
import "./square.css";

const Square = ({ color }: { color: string }) => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Control") {
      setIsCtrlPressed(true);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Control") {
      setIsCtrlPressed(false);
    }
  };

  const paint = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;

    // Check if the Ctrl key is pressed
    if (isCtrlPressed) {
      target.style.backgroundColor = color;
    }
  };
  const paintc = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    target.style.backgroundColor = color;
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isCtrlPressed]);

  return (
    <div>
      <div className="square" onMouseOver={paint} onClick={paintc}></div>
    </div>
  );
};

export { Square };
