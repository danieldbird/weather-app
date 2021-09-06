import data from '../data/city.list.min.json';

// get cities from JSON file, get only unique "name", then for those items return the item plus a
// label name and country eg: (AU)
const cities = [
  ...new Map(
    data.map((item) => [
      item.name,
      {
        ...item,
        label: item.name + ` (${item.country})`,
        value: item.name,
      },
    ])
  ).values(),
];

export default cities;
