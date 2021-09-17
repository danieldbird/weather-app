// check if an object is empty
export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
export function isDev() {
  return process.env.NODE_ENV === 'development';
}

const utilities = { isEmpty, isDev };
export default utilities;
