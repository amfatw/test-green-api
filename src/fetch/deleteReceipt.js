const deleteReceipt = async ({receiptId, id, token}) => {
  const address = `https://api.green-api.com/waInstance${id}/DeleteNotification/${token}/${receiptId}`;

  const params = {
    method: 'DELETE'
  }

  const response = await fetch(address, params);
  const result = await response.json();

  return result;
}

export { deleteReceipt };