import React from 'react';

export const Message = ({ user, message}) => {
  return(
    <div>
      <p>{user}: {message}</p>
    </div>
  )
}