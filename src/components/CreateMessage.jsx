import { useContext, useState } from 'react';
import { sendMessage } from '../fetch/sendMessage';
import { logInDataContext } from '../context/context';
import { getTrimmedTime } from '../utils/getTrimmedTime';


const CreateMessage = ({chatId, addMessage}) => {
  const {id, token} = useContext(logInDataContext);
  const [messageText, setMessageText] = useState('');

  const handleSendMessageClick = async (chatId, messageText) => {
    const message = messageText.trim();

    if (!message) return;

    setMessageText('');

    const messageId = await sendMessage({chatId, message, id, token});

    const sendedMessage = {
      time: getTrimmedTime(),
      chatId: chatId,
      messageId: messageId,
      text: messageText,
      type: 'outgoing',
    }

    addMessage(sendedMessage);
  }

  const handleEnter = (event) => {
    if (event.key !== 'Enter') return;

    handleSendMessageClick(chatId, messageText);
  }


  return (
    <div className='create-message'>
      <input 
        className='create-message__input-text' 
        type="text" 
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button 
        className='create-message__send-message' 
        type='button'
        onClick={() => handleSendMessageClick(chatId, messageText)}
      >
        send
      </button>
    </div>
  )
}


export { CreateMessage }