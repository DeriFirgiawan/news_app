const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const convertDate = value => {
  const date = new Date(value);
  const result = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  return result;
};
