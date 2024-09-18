import React, {ChangeEvent, FormEvent, useState} from "react";
import { InputBoxProps, MessageListProps } from "../types";

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
    const [message, setMessage] = useState<string>('');

    //function for handling change in textbox
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    //function for handling submission of textbox
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-box">
            <input 
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Type your message..."
            />
            <button type="submit"> Send </button>
        </form>
    );
};

export default InputBox;