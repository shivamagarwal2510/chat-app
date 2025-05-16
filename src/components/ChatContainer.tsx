import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (text: string) => {
    const newMessage: ChatMessage = { text, isUser: true };
    setMessages([...messages, newMessage]);

    // Simulate a response after a short delay
    setTimeout(() => {
      const botResponse: ChatMessage = { text: `Echo: ${text}`, isUser: false };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500); // Simulate a delay for the bot response
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-40px)] max-w-md w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} /> {/* Element to scroll into view */}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
