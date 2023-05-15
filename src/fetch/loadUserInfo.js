const loadUserInfo = async ({number, id, token}) => {
  const address = `https://api.green-api.com/waInstance${id}/getContactInfo/${token}`;

  const params = {
    method: 'POST',
    body: JSON.stringify({
      chatId: `${number}@c.us`
    })
  }

  const response = await fetch(address, params);

  if (!response.ok) {
    console.log(response.status);

    return
  };

  const result = await response.json();

  const {avatar, name} = result;

  return {avatar, name};
}

export { loadUserInfo }; 