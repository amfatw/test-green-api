const getRefactoredMessages = (messages) => {
  const result = messages.map((message) => {
    const chatId = message.chatId.slice(0, -5);
    const messageId = message.idMessage;
    const text = message.textMessage;
    const time = message.timestamp;
    const type = message.type

    return {chatId, messageId, text, time, type};
  })

  return result;
}

export { getRefactoredMessages };