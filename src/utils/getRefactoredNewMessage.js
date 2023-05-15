const getRefactoredNewMessage = (message) => {
  const { receiptId } = message;

  const refactoredMessage = {
    time: message.body.timestamp,
    messageId: message.body.idMessage,
    chatId: message.body.senderData.sender.slice(0, -5),
    text: message.body.messageData.textMessageData.textMessage,
    type: message.body.typeWebhook.slice(0, 8),
  }

  return {receiptId, refactoredMessage}
}

export { getRefactoredNewMessage };