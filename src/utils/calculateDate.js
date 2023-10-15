export const calculateDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long' };
  date.setUTCMonth(date.getUTCMonth() + 1); // Adjust the month to be zero-based
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate
};
