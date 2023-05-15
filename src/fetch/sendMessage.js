const sendMessage = async ({chatId, message, id, token}) => {
  const addres = `https://api.green-api.com/waInstance${id}/SendMessage/${token}`;
    
  const params = {
    method: 'POST',
    body: JSON.stringify({
      chatId: `${chatId}@c.us`,
      message: message,
    })
  }

  const response = await fetch(addres, params);
  const data = await response.json();

  return data.idMessage;
}

export { sendMessage };