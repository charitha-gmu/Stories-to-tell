import React, { useState } from "react";
import { Logo } from "assets/images";
import { Send } from "assets/icons";

const ChatBlock = () => {
  const [messagesList, setMessagesList] = useState([
    "Hello! How can we help you?",
  ]);
  const [message, setMessage] = useState("");

  const handleMessagesSent = () => {
    setMessagesList([...messagesList, message]);
    setMessage("");
  };

  return (
    <div className="chat-block">
      <div className="chat-container">
        <div>
          {messagesList.map((message, index) => {
            return (
              <div className={`message ${index === 0 ? "first-message" : ""}`}>
                {message}
              </div>
            );
          })}
        </div>
      </div>
      <div className="message-block">
        <div className="msg-input-container">
          <textarea
            className="textarea-field"
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e?.target?.value)}
          ></textarea>
          <div className="audio-recorder">
            <img
              src={Send}
              alt="send"
              className="record-icon"
              onClick={handleMessagesSent}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="text">Powered by</p>
        <img src={Logo} className="logo-image" alt="logo" />
      </div>
    </div>
  );
};

export default ChatBlock;
