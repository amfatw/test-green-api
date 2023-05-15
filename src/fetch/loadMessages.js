import { getRefactoredMessages } from '../utils/getRefactoredMessages';

const loadMessages = async ({chatId, id, token}) => {
  const address = `https://api.green-api.com/waInstance${id}/GetChatHistory/${token}`;
  
  const params = {
    method: 'POST',
    body: JSON.stringify({chatId: `${chatId}@c.us`})
  }

  const response = await fetch(address, params);
  const data = await response.json();
  
  const refactoredMessages = getRefactoredMessages(data);

  return refactoredMessages;
}

export { loadMessages };