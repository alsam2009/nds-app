import { navbar } from "../../nds.config";
//formate Date форматирование даты
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("ru-RU", options);
};

//colorsTags вывод определенного класса для цвета *navbar берез из импорта
export const getColorTag = (val) => {
  switch (val) {
    case navbar[1]:
      return `bg-color-150`;

    case navbar[2]:
      return `bg-color-690`;

    case navbar[3]:
      return `bg-color-800`;

    case navbar[4]:
      return `bg-color-500`;

    case navbar[5]:
      return `bg-color-350`;

    default:
      return "bg-base-400";
  }
};

//scrollHandler функция скролла

export const scrollHandler = (e, data, total, state) => {
  if (
    e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) <
      100 &&
    data.length < total
  ) {
    state(true);
  }
};
//функция обрезки предложения до целого слова

export const truncateSentence = (sentence, symb = 55) => {
  if (sentence.length > symb) {
    sentence = sentence.substring(0, symb);
    sentence = sentence.substring(
      0,
      Math.min(sentence.length, sentence.lastIndexOf(" "))
    );
    sentence = sentence.trim() + "...";
  }
  return sentence;
};
