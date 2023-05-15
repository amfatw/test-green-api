const loadContactInfo = async ({number, id, token}) => {
  const address = `https://api.green-api.com/waInstance${id}/getContactInfo/${token}`;

  const params = {
    method: 'POST',
    body: JSON.stringify({chatId: `${number}@c.us`})
  }

  const response = await fetch(address, params);

  const data = await response.json();
  
  const {avatar, name} = data;
  const chatId = data.chatId.slice(0, -5);
  const areMessagesLoaded = false;

  return {avatar, chatId, name, areMessagesLoaded};
}

export { loadContactInfo };