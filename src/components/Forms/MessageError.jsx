import React from 'react';

const MessageError = ({ children }) => {
  return (
    <div className='text-sm font-medium mt-0.5 text-red-500'>{children}</div>
  );
};

export default MessageError;
