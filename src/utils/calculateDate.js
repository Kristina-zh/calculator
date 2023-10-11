export const calculateDate = date => {
  const month = date.toLocaleString('en-us', { month: 'long' });
  const year = date.getFullYear();

  return month + ' ' + year;
}