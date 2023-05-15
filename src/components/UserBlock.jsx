import { ContactsList } from './ContactsList';
import { UserInfo } from './UserInfo';
import { AddContact } from './AddContact';


const UserBlock = ({ contacts, handleContactClick, addContact, currentChat }) => {
  return (
    <section className='user-block'>
      <UserInfo/>
      <AddContact
        addContact={addContact}
      />
      <ContactsList
        contacts={contacts}
        handleContactClick={handleContactClick}
        currentChat={currentChat}
      />
    </section>
  )
}


export { UserBlock };