export type Sender = 'user' | 'bot';

export interface Message {
    sender: Sender;
    text: string;
}

export interface ChatWindowProps {
    messages: Message[];
    onSend: (message: string) => void; //function type (get used to this!)
}

export interface MessageListProps {
    messages: Message[];
}

export interface InputBoxProps {
    onSend: (message: string) => void;
}