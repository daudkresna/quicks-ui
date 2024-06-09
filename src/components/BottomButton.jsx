import React, { useState } from "react";
import { MyButton } from "./Button";
import { InboxBox } from "./inbox/InboxBox";
import { DialogBox } from "./Dialog";
import { TaskDialog } from "./task_dialog/TaskDialog";

export const BottomButton = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openTaskDialog, setOpenTaskDialog] = useState(false);

  const handleOpenBottom = () => {
    setOpenBottom(!openBottom);
    setOpenDialog(false);
    setOpenTaskDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
    setOpenTaskDialog(false);
  };

  const handleOpenTaskDialog = () => {
    setOpenTaskDialog(!openTaskDialog);
    setOpenDialog(false);
  };

  return (
    <div className="fixed bottom-[27px] right-[34px]">
      <DialogBox openDialog={openDialog} openBottom={openBottom} />
      <TaskDialog openBottom={openBottom} openTaskDialog={openTaskDialog} />
      <div className="flex items-end gap-6 flex-row-reverse relative">
        <div
          className={`z-20 ${
            openDialog || openTaskDialog ? "-translate-x-3" : "-translate-x-0"
          } transition duration-75 ease-in`}
        >
          <button
            className="rounded-full bg-[#2F80ED] h-[68px] w-[68px] flex justify-center items-center "
            onClick={handleOpenBottom}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.4427 12.3359C32.3618 12.9486 32.6101 14.1903 31.9974 15.1094L24.737 26H35C35.7376 26 36.4153 26.4059 36.7634 27.0563C37.1114 27.7066 37.0732 28.4957 36.6641 29.1094L27.3308 43.1094C26.7181 44.0284 25.4763 44.2768 24.5573 43.6641C23.6382 43.0514 23.3899 41.8096 24.0026 40.8906L31.263 30H21C20.2624 30 19.5847 29.594 19.2367 28.9437C18.8886 28.2934 18.9268 27.5043 19.3359 26.8906L28.6692 12.8906C29.2819 11.9715 30.5237 11.7232 31.4427 12.3359Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            openDialog && openBottom
              ? "absolute z-50"
              : openDialog && !openBottom
              ? "z-10 opacity-0 absolute"
              : openBottom
              ? "translate-x-0"
              : "translate-x-[145%]"
          } flex flex-col gap-4 justify-center items-center transition duration-300 ease-in-out z-10`}
        >
          <h1
            className={`${
              openDialog && openBottom
                ? "hidden"
                : openBottom
                ? "static"
                : "hidden"
            } text-[#F2F2F2] font-lato text-[14px]`}
          >
            Inbox
          </h1>
          <button
            className={` rounded-full bg-[#F2F2F2] ${
              openDialog ? "h-[68px] w-[68px]" : "h-[60px] w-[60px]"
            } transition duration-300 ease-in-out flex justify-center items-center `}
            onClick={handleOpenDialog}
          >
            <div>
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
                  d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
                  fill="#8885FF"
                />
              </svg>
            </div>
          </button>
        </div>
        <div
          className={`${
            openTaskDialog && openBottom
              ? "absolute z-50"
              : openTaskDialog && !openBottom
              ? "z-10 opacity-0 absolute"
              : openBottom
              ? "translate-x-0"
              : "translate-x-[285%]"
          } flex flex-col gap-4 justify-center items-center transition duration-300 ease-in-out `}
        >
          <h1
            className={`${
              openBottom
                ? "static"
                : openBottom && openDialog
                ? "hidden"
                : "hidden"
            } text-[#F2F2F2] font-lato text-[14px]`}
          >
            Task
          </h1>
          <button
            className={`${
              openTaskDialog ? "h-[68px] w-[68px]" : "h-[60px] w-[60px]"
            } rounded-full bg-[#F2F2F2] flex justify-center items-center transition duration-300 ease-in-out`}
            onClick={handleOpenTaskDialog}
          >
            <div>
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
                  d="M3.92984 4.40063H26.5614C27.9445 4.40063 29.076 5.53221 29.076 6.91526V23.2603C29.076 24.6433 27.9445 25.7749 26.5614 25.7749H3.92984C2.5468 25.7749 1.41522 24.6433 1.41522 23.2603V6.91526C1.41522 5.53221 2.5468 4.40063 3.92984 4.40063ZM3.9298 6.91528V23.2603H13.9883V6.91528H3.9298ZM26.5614 23.2603H16.5029V6.91528H26.5614V23.2603ZM25.3042 11.3158H17.7603V13.2018H25.3042V11.3158ZM17.7603 14.4591H25.3042V16.3451H17.7603V14.4591ZM25.3042 17.6024H17.7603V19.4883H25.3042V17.6024Z"
                  fill="#F8B76B"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
