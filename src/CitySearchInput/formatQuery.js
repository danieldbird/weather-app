// change the search query to uppercase the first letter of every word to match the JSON object we are querying
const formatQuery = (query) => {
  return query
    .split(' ')
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(' ');
};

export default formatQuery;
