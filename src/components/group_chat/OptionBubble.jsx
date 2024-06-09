import React, { useState } from "react";

export const OptionBubble = ({ openOption }) => {
  return (
    <div
      className={`${
        openOption ? "absolute top-3 left-0 border-2" : "hidden"
      } divide-y-2 flex flex-col w-[126px] h-[80px] bg-white border-[#BDBDBD] rounded-[5px]  font-lato text-[12px] font-bold  divide-[#BDBDBD]`}
    >
      <div className="px-[18px] py-[11px]">
        <button className="text-[#2F80ED]">Edit</button>
      </div>
      <div className="px-[18px] py-[11px]">
        <button className="text-[#EB5757]">Delete</button>
      </div>
    </div>
  );
};
