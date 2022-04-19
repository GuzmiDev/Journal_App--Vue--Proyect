const getDayMonthYear = (dateString) => {
  const date = new Date(dateString);

  return {
    day: date.getDate(),
    month: date.toLocaleString("default", {
      month: "long",
    }),
    yearDay: date.toLocaleString("default", {
      year: "numeric",
      weekday: "long",
    }),
  };
};

export default getDayMonthYear;
