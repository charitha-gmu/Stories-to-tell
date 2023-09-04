import { ChatIcon } from 'assets/icons';
import React, { useState } from 'react';
import ChatBlock from './ChatBlock';

const ChatInterface = () => {
    const [openChatBox, setOpenChatBox] = useState<boolean>(false);

    const handleOnClick = () => {
        setOpenChatBox(!openChatBox);
    };

    return (
        <>
            <div className="chat-bot-icon" onClick={handleOnClick}>
                <img src={ChatIcon} className="icon" />
                <p className="text">Tror</p>
            </div>

            {openChatBox ? <ChatBlock /> : null}
        </>
    );
};

export default ChatInterface;
