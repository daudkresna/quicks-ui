import React, { useRef } from "react";
import { ChatTitle } from "../ChatTitle";
import ChatBubble from "./ChatBubble";
import { LineMessage } from "../LineMessage";

export const GroupChat = ({ handleOpenChat }) => {
  const yourMessage = true;
  const refElement = useRef();
  const scrollPosition = useRef();

  // const checkScroll = () => {
  //   console.log("hai");
  //   const position = scrollPosition.current?.scrollTop;
  //   const refPosition =
  //     refElement.current?.getBoundingClientRect().top -
  //     refElement.current?.offsetTop;
  //   console.log(position, refPosition);
  //   // const top = refPosition.top;
  //   if (position > refPosition) {
  //     console.log("Masuk");
  //   }
  // };

  return (
    <>
      <div className="w-full">
        <ChatTitle handleOpenChat={handleOpenChat} />
      </div>
      <div className="w-full overflow-y-scroll px-[22px]">
        <ChatBubble
          yourMessage={yourMessage}
          message={
            "No worries. It will be completed ASAP. I’ve asked him yesterday."
          }
          date="19:32"
        />
        <ChatBubble
          date="19:32"
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          bubbleColor="bg-[#FCEED3]"
          sender="Mary Hilda"
          senderColor={"text-[#E5A443]"}
        />
        <ChatBubble
          message={
            "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary."
          }
          yourMessage={true}
          date={"19:32"}
        />
        <ChatBubble
          date={"19:32"}
          message={"Sure thing, Claren"}
          bubbleColor="bg-[#FCEED3]"
          sender="Mary Hilda"
          senderColor="text-[#E5A443]"
        />
        <ChatBubble
          date="19:32"
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          bubbleColor="bg-[#FCEED3]"
          sender="Mary Hilda"
          senderColor={"text-[#E5A443]"}
        />
        <ChatBubble
          date="19:32"
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          bubbleColor="bg-[#FCEED3]"
          sender="Mary Hilda"
          senderColor={"text-[#E5A443]"}
        />
        <ChatBubble
          date="19:32"
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          bubbleColor="bg-[#FCEED3]"
          sender="Mary Hilda"
          senderColor={"text-[#E5A443]"}
        />
        <LineMessage
          lineColor={"bg-red-300"}
          message={"New Message"}
          textColor={"text-red-300"}
          refElement={refElement}
        />
        <ChatBubble
          date="19:32"
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          bubbleColor="bg-[#FCEED3]"
          sender="Mary Hilda"
          senderColor={"text-[#E5A443]"}
        />
        <ChatBubble
          date="19:32"
          message="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
          bubbleColor="bg-[#FCEED3]"
          sender="Mary Hilda"
          senderColor={"text-[#E5A443]"}
        />
      </div>
      <div className="w-full px-[20px] pt-[25px] pb-[20px] gap-2 flex">
        <input
          type="text"
          className="w-full rounded-[5px] border-[#828282] border-2 placeholder:text-[#333333] placeholder:px-[16px] placeholder: py-[13px]"
          placeholder="Type a new message"
        />
        <button className="bg-[#2F80ED] px-[21px] py-[14px] rounded-[5px] text-white font-lato text-[14px]">
          Send
        </button>
      </div>
    </>
  );
};
