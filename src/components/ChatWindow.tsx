import React from "react";

import { ChatWindowProps } from "../types";
import MessageList from "./MessageList";
import InputBox from "./InputBox";

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSend }) => (
    <div className="chat-window">
        <MessageList messages={messages} />
        <InputBox onSend={onSend} />
    </div>
);

export default ChatWindow;