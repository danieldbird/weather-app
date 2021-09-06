const weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + 'st';
  }
  if (j === 2 && k !== 12) {
    return i + 'nd';
  }
  if (j === 3 && k !== 13) {
    return i + 'rd';
  }
  return i + 'th';
}

export default function getDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const weekday = weekdays[date.getDay() - 1];
  const formatDate = weekday + ' ' + ordinal_suffix_of(day);
  return formatDate;
}
