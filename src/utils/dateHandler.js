const dateFormatter = (date) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return `${month.slice(0, 3)} ${day}, ${year}`;
};
export default dateFormatter;
