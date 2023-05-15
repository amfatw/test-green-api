import { getMessageTime } from '../utils/getMessageTime';


const MessagesList = ({messages, areMessagesLoading}) => {

  if (areMessagesLoading) return <h1>LOADING</h1>
  
  return (
    <div className='messages-list'>
      {!messages[0]
        ? <p className='messages-list__no-messagees'>No messages</p>
        : <ul className='messages-list__list'>
            {/* <li className='message message--outgoing'>
              <p className='message__text'>my message text</p>
              <span className='message__time'>
                00:00
              </span>
            </li>
            <li className='message message--incoming'>
              <p className='message__text'>your message text</p>
              <span className='message__time'>
                00:01
              </span>
            </li> */}
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