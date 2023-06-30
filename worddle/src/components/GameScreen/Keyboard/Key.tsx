import React from "react";

export const WordleKey = (p: { value: string; handleKeyClick: (keyValue: string) => void }) => {
  return (
    <div
      className="flex h-[51px] w-[44px] cursor-pointer items-center justify-center rounded-[5px] bg-wordle-lighter-gray text-lg text-wordle-dark-blue dark:bg-wordle-dark-blue dark:text-white"
      onClick={() => p.handleKeyClick(p.value)}
    >
      {p.value}
    </div>
  );
};

export const EnterKey = (p: { handleEnterKey: () => void }) => {
  return (
    <div
      className="flex h-[51px] cursor-pointer items-center justify-center rounded-[5px] bg-wordle-lighter-gray px-3 text-lg text-wordle-dark-blue dark:bg-wordle-dark-blue dark:text-white"
      onClick={() => p.handleEnterKey()}
    >
      Enter
    </div>
  );
};

export const DeleteKey = (p: { handleDeleteKey: () => void }) => {
  return (
    <div
      className="flex h-[51px] cursor-pointer items-center justify-center rounded-[5px] bg-wordle-lighter-gray px-3 text-lg text-wordle-dark-blue dark:bg-wordle-dark-blue dark:text-white"
      onClick={() => p.handleDeleteKey()}
    >
      Delete
    </div>
  );
};
