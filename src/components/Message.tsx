import React from 'react';

interface MessageProps {
  text: string;
  isUser: boolean; // To differentiate between user's messages and others'
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  const messageClasses = isUser
    ? 'bg-blue-500 text-white rounded-br-none self-end'
    : 'bg-gray-300 text-gray-800 rounded-bl-none self-start';

  return (
    <div className={`max-w-[70%] p-3 rounded-lg mb-2 ${messageClasses}`}>
      {text}
    </div>
  );
};

export default Message;
