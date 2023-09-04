import React from 'react';
import TrorLogo from '../../assets/images/logo.png';
import { RecordIcon } from 'assets/icons';

const ChatBlock = () => {
    return (
        <div className="chat-block">
            <div className="chat-container"></div>

            <div className="message-block">
                <div className="msg-input-container">
                    <textarea
                        className="textarea-field"
                        placeholder="Write your message"
                    ></textarea>
                    <div className="audio-recorder">
                        <img src={RecordIcon} />
                    </div>
                </div>
            </div>

            <div className="footer">
                <p className="text">Powered by</p>
                <img src={TrorLogo} className="logo-image" />
            </div>
        </div>
    );
};

export default ChatBlock;
