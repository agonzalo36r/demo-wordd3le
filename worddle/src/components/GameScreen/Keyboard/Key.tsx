import React from "react";

const WordleKey = (p: { value: string }) => {
  return (
    <div className="flex h-[51px] w-[44px] items-center justify-center rounded-[5px] bg-wordle-lighter-gray text-lg text-wordle-dark-blue dark:bg-wordle-dark-blue dark:text-white ">
      {p.value}
    </div>
  );
};

export default WordleKey;
