const checkWA = async (number, id, token) => {
  const addres = `https://api.green-api.com/waInstance${id}/CheckWhatsapp/${token}`;

  const params = {
    method: 'POST',
    body: JSON.stringify({
      phoneNumber: number
    })
  }

  const response = await fetch(addres, params);
  
  if (!response.ok) {
    console.log(response.status);

    return;
  }

  const result = await response.json();
  
  return result.existsWhatsapp;
}

export { checkWA };