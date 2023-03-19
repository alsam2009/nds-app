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
      return { baseClass: "bg-color-150", otherClass: "bg-color-190" };

    case navbar[2]:
      return { baseClass: "bg-color-650", otherClass: "bg-color-690" };

    case navbar[3]:
      return { baseClass: "bg-color-800", otherClass: "bg-color-850" };

    case navbar[4]:
      return { baseClass: "bg-color-550", otherClass: "bg-color-590" };

    case navbar[5]:
      return { baseClass: "bg-color-350", otherClass: "bg-color-390" };

    default:
      return { baseClass: "bg-base-400", otherClass: "bg-base-500" };
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
