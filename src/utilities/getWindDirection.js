const getWindDirection = (degree) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round((degree * 8) / 360);
  return directions[index];
};

export default getWindDirection;
