import React from "react";

import { ChatWindowProps } from "../types";
import MessageList from "./MessageList";
import InputBox from "./InputBox";

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSend }) => (
    <div>
        <MessageList messages={messages} />
        <InputBox onSend={onSend} />
    </div>
);

export default ChatWindow;