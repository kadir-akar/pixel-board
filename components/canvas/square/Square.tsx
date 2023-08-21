import React from "react";
import "./square.css";
const Square = ({ color }: { color: string }) => {
  const paint = () => {
    return (e: { target: any }) => {
      const target = e.target;
      target.style.backgroundColor = color;
    };
  };
  return (
    <div>
      <div className="square" onClick={paint()}></div>
    </div>
  );
};

export { Square };
