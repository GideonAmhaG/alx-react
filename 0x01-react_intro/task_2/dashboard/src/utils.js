export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex) => {
  let res;
  isIndex
    ? (res = 'Holberton School')
    : (res = 'Holberton School main dashboard');
  return res;
};
