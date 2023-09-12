import React, { useState } from "react";
import ChatBlock from "./HelpBlock";
import { Chat } from "assets/icons";

const HelpInterface = () => {
  const [openChatBox, setOpenChatBox] = useState<boolean>(false);

  const handleOnClick = () => {
    setOpenChatBox(!openChatBox);
  };

  return (
    <>
      <div className="chat-bot-icon" onClick={handleOnClick}>
        <img src={Chat} className="icon" alt="chat" />
        {/* <p className="text">Tales To Share</p> */}
      </div>

      {openChatBox ? <ChatBlock /> : null}
    </>
  );
};

export default HelpInterface;
