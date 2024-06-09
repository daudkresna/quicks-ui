import React, { useState } from "react";
import { OptionBubble } from "./OptionBubble";

const ChatBubble = ({
  yourMessage = false,
  sender = "You",
  senderColor = "text-[#9B51E0]",
  bubbleColor = "bg-[#EEDCFF]",
  date,
  message,
}) => {
  const [openOption, setOpenOption] = useState(false);

  const handleOpenOption = () => {
    setOpenOption(!openOption);
  };
  return (
    <div
      className={`${yourMessage ? "justify-end" : "justify-start"} w-full flex`}
    >
      <div className="flex flex-col w-4/5 my-2">
        <div
          className={`${
            yourMessage ? "items-end " : "items-start"
          } flex flex-col `}
        >
          <p className={`font-lato text-[12px] font-bold ${senderColor}`}>
            {sender}
          </p>
          <div
            className={`${yourMessage ? "flex-row" : "flex-row-reverse"} flex`}
          >
            <div className="mx-2 mt-2 flex items-start relative">
              <button onClick={handleOpenOption}>
                <svg
                  width="15"
                  height="6"
                  viewBox="0 0 21 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.07016 0.573059C1.68712 0.573059 0.555542 1.70464 0.555542 3.08768C0.555542 4.47072 1.68712 5.6023 3.07016 5.6023C4.4532 5.6023 5.58478 4.47072 5.58478 3.08768C5.58478 1.70464 4.4532 0.573059 3.07016 0.573059ZM18.1579 0.573059C16.7748 0.573059 15.6433 1.70464 15.6433 3.08768C15.6433 4.47072 16.7748 5.6023 18.1579 5.6023C19.5409 5.6023 20.6725 4.47072 20.6725 3.08768C20.6725 1.70464 19.5409 0.573059 18.1579 0.573059ZM8.0994 3.08768C8.0994 1.70464 9.23098 0.573059 10.614 0.573059C11.9971 0.573059 13.1286 1.70464 13.1286 3.08768C13.1286 4.47072 11.9971 5.6023 10.614 5.6023C9.23098 5.6023 8.0994 4.47072 8.0994 3.08768Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </button>
              <OptionBubble
                openOption={openOption}
                handleOpenOption={handleOpenOption}
              />
            </div>
            <div
              className={`w-fit font-lato rounded-[5px] text-[12px] ${bubbleColor} flex-col p-[9px]`}
            >
              <p className="mb-2">{message}</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
