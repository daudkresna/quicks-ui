import React, { useRef } from "react";

export const LineMessage = ({
  lineColor,
  message,
  textColor,
  refElement,
  checkScroll,
  scrollPosition,
}) => {
  return (
    <div
      className={`h-[1px] my-[22px] relative z-10 ${lineColor}`}
      ref={refElement}
    >
      <div className="absolute h-full w-fit right-1/3 z-30 flex flex-nowrap justify-center items-center px-4 gap-2  bg-white text-nowrap">
        <p className={`text-[14px] ${textColor} font-lato font-bold`}>
          {message}
        </p>
        <svg
          width="15"
          height="15"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.15 10.09L18.377 8.31695L11.3475 15.3338V0.0300293H8.83253V15.3338L1.81568 8.30438L0.0300293 10.09L10.09 20.15L20.15 10.09Z"
            fill="#F2F2F2"
          />
        </svg>
      </div>
    </div>
  );
};
