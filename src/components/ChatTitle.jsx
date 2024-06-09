import React from "react";

export const ChatTitle = ({ handleOpenChat }) => {
  return (
    <>
      <div className="flex justify-between items-center mx-[24px] my-[24px]">
        <div className="flex gap-[14px]">
          <button onClick={handleOpenChat}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9883 8.83041H5.68683L12.7152 1.80204L10.9298 0.0292358L0.871338 10.0877L10.9298 20.1462L12.7026 18.3734L5.68683 11.345H20.9883V8.83041Z"
                fill="#333333"
              />
            </svg>
          </button>
          <div className="flex flex-col">
            <h2 className="font-lato font-bold text-[16px] text-[#2F80ED]">
              I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </h2>
            <h3 className="font-lato text-[12px] text-[#333333]">
              3 Participants
            </h3>
          </div>
        </div>
        <button onClick={handleOpenChat}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z"
              fill="#333333"
            />
          </svg>
        </button>
      </div>
      <div className="w-full border-t border-gray-300"></div>
    </>
  );
};
