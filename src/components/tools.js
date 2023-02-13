//formate Date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("ru-RU", options);
};

//colorsTags
export const getColorTag = (val) => {
  const tags = ["важное", "новинки", "обзоры", "мероприятия", "интересно"];

  switch (val.toLowerCase()) {
    case tags[0]:
      return `bg-red-500`;

    case tags[1]:
      return `bg-cyan-500`;

    case tags[2]:
      return `bg-violet-500`;

    case tags[3]:
      return `bg-teal-500`;

    case tags[4]:
      return `bg-amber-500`;

    default:
      return "bg-slate-400";
  }
};
