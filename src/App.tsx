import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import { Message } from './types';
import { sendMessage } from './services/api';



function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  //then we write a handleSend asynchronous function
  const handleSend = async (message: string) => {
    const userMessage: Message = { sender: 'user', text: message }; //converting to a message object
    setMessages((prevMessages) => [...prevMessages, userMessage]); //update previous state

    try {
      const { response } = await sendMessage(message);
      const botMessage: Message = { sender: 'bot', text: response};
      setMessages((prevMessages) => [...prevMessages, botMessage]); //update previous state
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = { sender: 'bot', text: 'Sorry, something went wrong!'};
      setMessages((prevMessages) => [...prevMessages, errorMessage]); //update previous state
    }
  };

  return (
    <div className="App">
      <ChatWindow messages={messages} onSend={handleSend} />
    </div>
  );
}

export default App;
