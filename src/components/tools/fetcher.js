import axios from "axios";

export const fetcher = (url) =>
  axios.get(url).then((res) => {
    return { data: res.data, headers: res.headers };
  });
