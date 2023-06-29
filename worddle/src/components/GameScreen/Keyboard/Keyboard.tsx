import React from "react";
import WordleKey from "./Key";

const Keyboard = () => {
  return (
    <div className="flex flex-col gap-y-[9px] rounded-[15px] bg-wordle-lighter-gray/30 p-[33px] dark:bg-wordle-lighter-gray/[.03]">
      <div className="flex gap-x-[9px]">
        {keys1.map((key, index) => (
          <WordleKey value={key} key={index} />
        ))}
      </div>
      <div className="flex gap-x-[9px]">
        {keys2.map((key, index) => (
          <WordleKey value={key} key={index} />
        ))}
      </div>
      <div className="flex gap-x-[9px]">
        {keys3.map((key, index) => (
          <WordleKey value={key} key={index} />
        ))}
      </div>
    </div>
  );
};

const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
const keys3 = ["ESC", "Z", "X", "C", "V", "B", "N", "M", "ENTER"];

export default Keyboard;
