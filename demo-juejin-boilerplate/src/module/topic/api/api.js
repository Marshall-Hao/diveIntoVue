import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

instance.interceptors.response.use(
  function({ status, statusText, data }) {
    if (status !== 200) {
      return Promise.reject();
    }
    return data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const DATA_TYPE = {
  new: "NEWEST",
  hot: "POPULAR",
  top: "THREE_DAYS_HOTTEST",
};

export const fetchItems = ({ type, after }) => {
  return instance
    .get("/api/lists", {
      operationName: "",
      query: "",
      variables: { first: 100, after, order: DATA_TYPE[type] },
      extensions: { query: { id: "21207e9ddb1de777adeaca7a2fb38030" } },
    })
    .then(({ data, cursor }) => {
      console.log("again");
      return {
        items: data,
        pageInfo: {
          cursor,
        },
      };
    });
};
