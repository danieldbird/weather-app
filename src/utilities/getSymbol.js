const getSymbol = (unit) => {
  const symbol = {};

  symbol.percentage = '%';
  symbol.temp = '°';

  if (unit === 'metric') {
    symbol.wind = ' m/s';
    symbol.pressure = ' hpa';
  } else if (unit === 'imperial') {
    symbol.wind = ' mp/h';
    symbol.pressure = ' in';
  }
  return symbol;
};

export default getSymbol;
