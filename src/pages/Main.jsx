import { useState, useContext, useEffect } from 'react';

import { UserBlock } from '../components/UserBlock';
import { ChatBlock } from '../components/ChatBlock';
import { loadContactInfo } from '../fetch/loadContactInfo';
import { logInDataContext } from '../context/context';
import { loadMessages } from '../fetch/loadMessages';
import { checkIncomeMessage } from '../fetch/checkIncomeMessage';
import { deleteReceipt } from '../fetch/deleteReceipt';
import { getRefactoredNewMessage } from '../utils/getRefactoredNewMessage';
import { getMergedMessages } from '../utils/getMergedMessages';


const Main = () => {
  const {id, token} = useContext(logInDataContext);
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [allMessages, setAllMessages] = useState({});
  const [incomingMessages, setIncomingMessages] = useState([]);

  const handleContactClick = async (contact) => {
    setCurrentChat({...contact});

    const {chatId, areMessagesLoaded} = contact;
    
    if (areMessagesLoaded) return;
    
    const loadedMessages = await loadMessages({chatId, id, token});

    const currentContactMessages = (
      allMessages[chatId]
      ? allMessages[chatId]
      : []
    );

    const mergedMessages = getMergedMessages({currentContactMessages, loadedMessages});

    setAllMessages({
      ...allMessages,
      [chatId]: mergedMessages
    });

    const handledContact = {...contact, areMessagesLoaded: true};

    const filteredContacts = contacts.filter((contact) => contact.chatId !== chatId);

    const contactsWithHandled = [...filteredContacts, handledContact]

    setContacts(contactsWithHandled);

    setCurrentChat(handledContact);
  }

  const closeChat = () => {
    setCurrentChat({});
  }

  const addContact = async (number) => {
    const contact = await loadContactInfo({number, id, token});
    
    setContacts([...contacts, contact]);
  }

  const addMessage = (message) => {
    const {chatId} = message;

    const currentChatMessages = (
      allMessages[chatId]
      ? allMessages[chatId]
      : []
    );

    setAllMessages({
      ...allMessages,
      [chatId]: [message, ...currentChatMessages]
    })
  }

  const watchNewMessages = async (id, token) => {
    const newMessage = await checkIncomeMessage(id, token);
    
    if (!newMessage) {
      setTimeout(() => {
        watchNewMessages(id, token);
      }, 10000);
      
      return;
    }

    const messageType = newMessage.body.typeWebhook;

    if (messageType !== 'incomingMessageReceived'
        && messageType !== 'outgoingMessageReceived') {
      const {receiptId} = newMessage;
      await deleteReceipt({receiptId, id, token});
      
      return watchNewMessages(id, token);
    }

    const {refactoredMessage, receiptId} = getRefactoredNewMessage(newMessage);

    setIncomingMessages([...incomingMessages, refactoredMessage]);

    const result = await deleteReceipt({receiptId, id, token});

    watchNewMessages(id, token);
  }

  useEffect(() => {
    watchNewMessages(id, token)
  }, []);

  const addIncomingMessage = async (message) => {
    const {chatId} = message;
    
    const isContact = allMessages[chatId];
    
    if (isContact) {
      addMessage(message)
    }
    
    if (!isContact) {
      await addContact(chatId);
      
      addMessage(message)
    }
  }

  useEffect(() => {
    if (!incomingMessages[0]) return;

    const incomingMessage = incomingMessages[0];

    addIncomingMessage(incomingMessage);

    const incomingMessagesWithoutHandled = [...incomingMessages].shift();

    setIncomingMessages(incomingMessagesWithoutHandled)
  }, [incomingMessages])

  const messages = allMessages[currentChat.chatId];


  return (
    <main className='page-main'>
      <UserBlock
        contacts={contacts}
        currentChat={currentChat}

        addContact={addContact}
        handleContactClick={handleContactClick}
      />
      <ChatBlock
        messages={messages}
        currentChat={currentChat}

        closeChat={closeChat}
        addMessage={addMessage}
      />
    </main>
  )
}


export { Main };