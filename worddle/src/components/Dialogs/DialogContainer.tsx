import React from "react";

const DialogContainer = (p: { children: JSX.Element }) => {
  return (
    <div
      className={`z-10 col-span-1 col-start-1 row-span-1 row-start-1 mx-auto w-[546px] self-center rounded-xl border-[1px] border-wordle-black bg-wordle-light-gray px-[42px] pb-6 pt-[54px] dark:border-[#939B9F] dark:bg-wordle-darker-blue`}
    >
      {p.children}
    </div>
  );
};

export default DialogContainer;
