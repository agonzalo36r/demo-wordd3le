import React from "react";

const MainButton = (p: { text: string }) => {
  return (
    <div
      className={`heading-[32.81px] mx-auto flex h-[44px] w-[263px] justify-center rounded-[5px] bg-wordle-green text-[28px] font-bold text-white`}
    >
      {p.text}
    </div>
  );
};

export default MainButton;
