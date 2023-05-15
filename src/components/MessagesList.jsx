import { useEffect, useRef } from 'react';
import { getMessageTime } from '../utils/getMessageTime';


const MessagesList = ({messages, areMessagesLoading}) => {
  const messagesListContainerRef = useRef(null);

  useEffect(() => {
    if (areMessagesLoading || !messages[0]) return;

    const messagesContainer = messagesListContainerRef.current;

    messagesContainer.scrollTop =messagesContainer.scrollHeight;
  }, [messages, areMessagesLoading])


  if (areMessagesLoading) {
    return (
      <div className='messages-list'>
        <p className="messages-list__loader">Loading...</p>
      </div>
    )
  }
  
  return (
    <div 
      className='messages-list' 
      ref={messagesListContainerRef}
    >
      {!messages[0]
        ? <p className='messages-list__no-messagees'>No messages</p>
        : <ul className='messages-list__list'>
            {messages.map((message) => {
              const {messageId, text, time, type} = message;
              const handledTime = getMessageTime(time);
              const classes = `message message--${type}`;
            
              return (
                <li 
                  className={classes}
                  key={messageId}
                >
                  <p className='message__text'>
                    {text}
                  </p>
                  <span className='message__time'>
                    {handledTime}
                  </span>
                </li>
              )
            })}
          </ul>
      }
    </div>
  )
}


export { MessagesList }