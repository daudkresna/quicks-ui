import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { GroupSection } from "./GroupSection";
import { TaskLoading } from "./TaskLoading";
import { GroupChat } from "./group_chat/GroupChat";

export const DialogBox = ({ openDialog, openBottom }) => {
  const [loading, setLoading] = useState(true);

  const [openChat, setOpenChat] = useState(false);

  //ganti loadingnya kembali ke true nanti

  let content;

  const handleOpenChat = () => {
    setOpenChat(!openChat);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading === true && openDialog && openBottom) {
        setLoading(false);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [loading, openDialog, openBottom]);

  if (loading) {
    content = <TaskLoading description={"Chat Loading..."} />;
  } else {
    content = <GroupSection openChat={handleOpenChat} />;
  }

  return (
    <div
      className={`${
        openDialog && openBottom ? "scale-100" : "scale-0"
      } flex flex-col z-50 origin-bottom-right bg-white w-[734px] h-[737px]  rounded-md absolute bottom-20 right-0 transition duration-300 ease-in-out`}
    >
      {!openChat ? (
        <>
          <SearchBar /> {content}
        </>
      ) : (
        <GroupChat handleOpenChat={handleOpenChat} />
      )}
    </div>
  );
};
