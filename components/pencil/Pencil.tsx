import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import "./pencil.css";

const Pencil = () => {
  return (
    <div>
      <div className="tool pencil">
        <BiSolidPencil />
      </div>
      <span className="tool-number">2</span>
    </div>
  );
};

export { Pencil };
