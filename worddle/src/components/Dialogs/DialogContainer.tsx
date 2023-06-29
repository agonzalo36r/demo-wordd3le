import React from "react";

const DialogContainer = (p: { children: JSX.Element }) => {
  return (
    <div
      className={`w-[546px] rounded-xl border-[1px] border-wordle-black bg-wordle-light-gray px-[42px] pb-6 pt-[54px] dark:border-[#939B9F] dark:bg-wordle-dark`}
    >
      {p.children}
    </div>
  );
};

export default DialogContainer;
