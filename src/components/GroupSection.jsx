import React from "react";
import { GroupChatList } from "./GroupChatList";

export const GroupSection = ({ openChat }) => {
  const groupList = [
    {
      id: 1,
      title: "109220-Naturalization",
      person: "Cameron Phillips :",
      message: "Please check this out!",
      date: "January 1,2021 19:10",
      newMessage: true,
    },
    {
      id: 2,
      title:
        "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
      person: "Ellen :",
      message: "Hey, please read.",
      date: "02/06/2021 10:45",
      newMessage: false,
    },
    {
      id: 3,
      title: "8405-Diana SALAZAR MUNGUIA",
      person: "Cameron Phillips :",
      message:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
      date: "01/06/2021 12:19",
      newMessage: false,
    },
  ];
  return (
    <div className="w-full px-[32px] grid grid-cols-1 divide-y-2 divide-[#828282]">
      {groupList.map((group) => (
        <GroupChatList
          date={group.date}
          message={group.message}
          newMessage={group.newMessage}
          openChat={openChat}
          person={group.person}
          title={group.title}
          key={group.id}
        />
      ))}
    </div>
  );
};
