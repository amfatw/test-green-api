const ChatHeader = ({currentChat, closeChat}) => {
  const {avatar, name} = currentChat;


  return (
    <div className='chat-header'>
      <button
        className='chat-header__close-button'
        onClick={closeChat}
      >
        <span className='visually-hidden'>close chat</span>
      </button>
      <p 
        className='chat-header__chat-name'
      >
        {name}
      </p>
      <div className='chat-header__chat-image-container'>
        {avatar &&
          <img 
            className='chat-header__chat-image' 
            src={avatar} 
            alt={name}
          />
        }
      </div>
    </div>
  )
}


export { ChatHeader };