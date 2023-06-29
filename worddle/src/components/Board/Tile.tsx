import React from "react";

const Tile = (p: { letter: string; status: number }) => {
  return (
    <div
      className={`${tileStatusSelector(
        p.status
      )} heading-[41.02px] inline-flex h-[76px] w-[75px] items-center justify-center rounded-[5px] border-[1px] text-[35px] font-bold capitalize text-black dark:text-white`}
    >
      {p.letter}
    </div>
  );
};

const tileStatusSelector = (status: number): string => {
  switch (status) {
    case 1:
      return "border-0 dark:border-0 bg-wordle-green";
    case 2:
      return "border-0 dark:border-0 bg-wordle-yellow";
    case 3:
      return "border-0 dark:border-0 bg-wordle-gray";
    default:
      return "border-[1px] border-wordle-black dark:border-[#939B9F] bg-white dark:bg-transparent";
  }
};
export default Tile;
