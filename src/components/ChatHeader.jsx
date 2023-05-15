const ChatHeader = ({currentChat, closeChat}) => {
  const {avatar, name} = currentChat;


  return (
    <div className='chat-header'>
      <button
        className='chat-header__close-button'
        onClick={closeChat}
      >
        close
      </button>
      <div className='chat-header__chat-info'>
        <div className='chat-header__chat-image-container'>
          <img 
            className='chat-header__chat-image' 
            src={avatar} 
            alt={name}
          />
        </div>
        <p 
          className='chat-header__chat-name'
        >
          {name}
        </p>
      </div>
    </div>
  )
}


export { ChatHeader };