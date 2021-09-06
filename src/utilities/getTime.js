const getTime = (time, offset) => {
  const date = new Date((time + offset) * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours <= 12 ? 'pm' : 'am';

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutes}${ampm}`;
};
export default getTime;
