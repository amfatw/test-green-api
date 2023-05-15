const getMessageTime = (time) => {

  const date = new Date(time * 1000);

  let hours = date.getHours();
  if (hours.toString().length === 1) hours = `0${hours}`;
  
  let minutes = date.getMinutes();
  if (minutes.toString().length === 1) minutes = `0${minutes}`;

  const result = `${hours}:${minutes}`;

  return result;
}

export { getMessageTime }