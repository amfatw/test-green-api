const loadUserNumber = async (id, token) => {
  const addres = `https://api.green-api.com/waInstance${id}/GetSettings/${token}`;

  const response = await fetch(addres);
  const data = await response.json();

  const number = data.wid.slice(0, -5);

  return number;
}

export { loadUserNumber };