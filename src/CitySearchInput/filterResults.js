import formatQuery from './formatQuery';
import cities from '../utilities/formatCities';

// return only cities with the query in the name
// limit results to a smaller number
const filterResults = (query) => {
  return cities
    .filter((city) => {
      return city.name.includes(formatQuery(query));
    })
    .slice(0, 7);
};

export default filterResults;
