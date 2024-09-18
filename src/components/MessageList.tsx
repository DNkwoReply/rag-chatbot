import React from "react";
import { MessageListProps } from "../types";

const MessageList: React.FC<MessageListProps> = ({messages}) => (
    <ul>
        {messages.map((msg, index) => (
            <li key={index} className={`message ${msg.sender}`}>
                {msg.text}
            </li>
        ))}
    </ul>
);

export default MessageList;