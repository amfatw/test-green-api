const getTrimmedTime = () => {
  const date = new Date();
  const stamp = date.getTime();
  const trimmedStamp = Number(stamp.toString().slice(0, -3));

  return trimmedStamp;
}

export { getTrimmedTime };