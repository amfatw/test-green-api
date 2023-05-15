const checkAccount = async ({id, token}) => {
  const address = `https://api.green-api.com/waInstance${id}/GetSettings/${token}`;
  
  try {
    const response = await fetch(address);
    const data = await response.json();

    return data.wid;
  } catch (error) {
    return null;
  }
}

export { checkAccount };