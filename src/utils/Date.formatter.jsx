export const FormatDate = ({dateString}) => {
  const date = new Date(dateString);
  const day = date.getDate();

  const monthNames = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];

  const month = monthNames[date.getMonth()];
  return (
    <span className="text-center">
      {day}- <br /> {month}
    </span>
  );
};