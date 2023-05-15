const getMergedMessages = ({currentContactMessages, loadedMessages}) => {
  const result = [...currentContactMessages];

  loadedMessages.forEach((message) => {
    const isDuplicate = result.find((resultMessage) => resultMessage.messageId === message.messageId);

    if (isDuplicate) return;

    result.push(message);
  })

  result.sort((a, b) => b.time - a.time);

  return result;
}

export { getMergedMessages };