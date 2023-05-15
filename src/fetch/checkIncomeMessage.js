const checkIncomeMessage = async (id, token) => {
  const response = await fetch(`https://api.green-api.com/waInstance${id}/ReceiveNotification/${token}`);
  const data = await response.json();

  return data;
}

export { checkIncomeMessage };