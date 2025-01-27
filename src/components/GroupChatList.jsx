import React from "react";

export const GroupChatList = ({
  title,
  person,
  message,
  date,
  newMessage,
  openChat,
}) => {
  return (
    <div
      className="flex justify-between relative pt-[22px] pb-[22px] hover:cursor-pointer"
      onClick={openChat}
    >
      <div className="flex">
        <div className="flex">
          <div className="w-[50px] h-[50px] bg-[#E0E0E0] flex rounded-full justify-center items-center">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3685 5.02924C12.5899 5.02924 10.3393 7.27982 10.3393 10.0585C10.3393 12.8371 12.5899 15.0877 15.3685 15.0877C18.1472 15.0877 20.3978 12.8371 20.3978 10.0585C20.3978 7.27982 18.1472 5.02924 15.3685 5.02924ZM17.8831 10.0585C17.8831 8.67546 16.7515 7.54388 15.3685 7.54388C13.9854 7.54388 12.8539 8.67546 12.8539 10.0585C12.8539 11.4415 13.9854 12.5731 15.3685 12.5731C16.7515 12.5731 17.8831 11.4415 17.8831 10.0585ZM22.9123 22.6316C22.6608 21.7389 18.7632 20.117 15.3684 20.117C11.9863 20.117 8.11375 21.7263 7.82457 22.6316H22.9123ZM5.31 22.6316C5.31 19.2871 12.0115 17.6023 15.3685 17.6023C18.7255 17.6023 25.427 19.2871 25.427 22.6316V25.1462H5.31V22.6316Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <div className="w-[50px] h-[50px] bg-[#2F80ED] flex rounded-full justify-center items-center -translate-x-1/2">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3685 5.02924C12.5899 5.02924 10.3393 7.27982 10.3393 10.0585C10.3393 12.8371 12.5899 15.0877 15.3685 15.0877C18.1472 15.0877 20.3978 12.8371 20.3978 10.0585C20.3978 7.27982 18.1472 5.02924 15.3685 5.02924ZM17.8831 10.0585C17.8831 8.67546 16.7515 7.54388 15.3685 7.54388C13.9854 7.54388 12.8539 8.67546 12.8539 10.0585C12.8539 11.4415 13.9854 12.5731 15.3685 12.5731C16.7515 12.5731 17.8831 11.4415 17.8831 10.0585ZM22.9123 22.6316C22.6608 21.7389 18.7632 20.117 15.3684 20.117C11.9863 20.117 8.11375 21.7263 7.82457 22.6316H22.9123ZM5.31 22.6316C5.31 19.2871 12.0115 17.6023 15.3685 17.6023C18.7255 17.6023 25.427 19.2871 25.427 22.6316V25.1462H5.31V22.6316Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </div>

        <div className="flex-col">
          <div className=" flex">
            <div className="max-w-[446px]">
              <h1 className="font-lato font-bold text-[16px] text-[#2F80ED] ">
                {title}
              </h1>
            </div>
            <div className="min-w-fit">
              <h2 className="font-lato text-[14px] text-[#4F4F4F] ml-[16px]">
                {date}
              </h2>
            </div>
          </div>
          <h2 className="font-lato font-bold text-[14px] text-[#4F4F4F]">
            {person}
          </h2>
          <div className="max-w-[450px]">
            <h2 className="font-lato text-[14px] text-[#4F4F4F] truncate">
              {message}
            </h2>
          </div>
        </div>
      </div>
      {newMessage && (
        <div className="bg-[#EB5757] h-[10px] w-[10px] rounded-full self-end"></div>
      )}
    </div>
  );
};
