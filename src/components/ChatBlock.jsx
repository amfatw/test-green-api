import { ChatHeader } from './ChatHeader'
import { CreateMessage } from './CreateMessage'
import { MessagesList } from './MessagesList'


const ChatBlock = ({currentChat, closeChat, messages, addMessage}) => {
  const areMessagesLoading = !currentChat.areMessagesLoaded;


  return (
    <section className='chat-block'>
      {!currentChat.chatId
        ? <p className='chat-block__no-chat'>Сhoose a chat to start messaging</p>
        : <>
            <ChatHeader
              currentChat={currentChat}
              closeChat={closeChat}
            />
            <MessagesList
              areMessagesLoading={areMessagesLoading}
              messages={messages}
            />
            <CreateMessage 
              chatId={currentChat.chatId}
              addMessage={addMessage}
            />
          </>
      }
    </section>
  )
}


export { ChatBlock }