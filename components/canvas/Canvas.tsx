import { useEffect } from "react";
import { Square } from "../square/Square";

import "./canvas.css";
const Canvas = () => {
  useEffect(() => {
    const canvas = document.querySelector(".canvas");
    if (canvas) {
      for (let i = 0; i < 32; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 32; j++) {
          const square = document.createElement("div");
          square.classList.add("square");
          square.addEventListener("click", (e) => {
            const target = e.target as HTMLDivElement;
            target.style.backgroundColor = "black";
          });
          row.appendChild(square);
        }
        canvas.appendChild(row);
      }
    }
  });
  return (
    <div>
      <div className="canvas"></div>
    </div>
  );
};
export { Canvas };
