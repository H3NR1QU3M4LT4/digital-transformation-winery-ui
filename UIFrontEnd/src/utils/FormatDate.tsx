export const formatDate = (date: Date) => {
  let newDate = new Date(date);
  return newDate.getFullYear();
};
