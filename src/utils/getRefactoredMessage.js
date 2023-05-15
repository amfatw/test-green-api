const getRefactoredMessage = (message) => {
  const chatId = message.chatId;
  const messageId = message.idMessage;
  const type = message.typeMessage;
  const time = message.timestamp;
  const text = message.textMessage;

  return {chatId, messageId, type, time, text}
}

export {getRefactoredMessage}