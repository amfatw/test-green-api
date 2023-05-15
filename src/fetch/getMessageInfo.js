const getMessageInfo = async ({id, token, messageId, chatId}) => {
  const address = `https://api.green-api.com/waInstance${id}/getMessage/${token}`;

  const params = {
    method: 'POST',
    body: JSON.stringify({
      chatId: `${chatId}@c.us`,
      idMessage: messageId
    })
  }

  const response = await fetch(address, params);
  const data = await response.json();

  return data;
}

export {getMessageInfo}