import React from 'react';
import './Messages.css';
import { useSelector, useDispatch } from 'react-redux';

function Messages() {
  const messages = useSelector(state => state.messages.messages);
  const dispatch = useDispatch();
  return (
    <div className="messages">
      {messages && messages.map(message => {
        const classes = (message.status >= 200 && message.status < 300) ? 'messages__message success' : 'messages__message error';
        return (
          <div className={classes} key={message.id}>
            <small onClick={() => dispatch({ type: 'CLEAR_MESSAGE', payload: { id: message.id } })}><b>x</b></small>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
