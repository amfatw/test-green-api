const ContactsList = ({contacts, handleContactClick, currentChat}) => {
  const onContactClick = (event, contact) => {
    event.preventDefault();

    handleContactClick(contact);
  }


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
              onClick={(event) => onContactClick(event, contact)}
            >
              <div className='contact__image-container'>
                {avatar &&
                  <img
                    className='contact__image'
                    src={avatar} 
                    alt={name} 
                  />
                }
              </div>
              <p
                className='contact__name'
              >
                {name ? name : chatId}
              </p>
            </button>
          </li>
        )
      })}
    </ul>
  )
}


export { ContactsList };