import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import { Message } from './types';
import { sendMessage } from './services/api';
import logo from './images/sprint_reply_uk_logo.jpg';



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
      <div className='header'>
        <h1> Sprint Reply Bot </h1>
        <img src={logo} className='logo' alt="sprint reply logo" />
      </div>
      <ChatWindow messages={messages} onSend={handleSend} />
      <div> Version 0.0.1 </div>
    </div>
  );
}

export default App;
