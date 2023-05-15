const ContactsList = ({contacts, handleContactClick, currentChat}) => {
  return (
    <ul className='contacts-list'>
      {contacts.map((contact) => {
        const {avatar, name, chatId} = contact;
        let classes = 'contact__item';
        if (chatId === currentChat.chatId) classes += ' contact__item--current';
        
        return (
          <li 
            className='contact' 
            key={chatId}
            >
            <button
              className={classes}
              onClick={() => handleContactClick(contact)
              }>
              <div className='contact__image-container'>
                <img
                  className='contact__image'
                  src={avatar} 
                  alt={name} 
                  />
              </div>
              <p>{name ? name : 'unknown'}</p>
            </button>
          </li>
        )
      })}
    </ul>
  )
}


export { ContactsList };