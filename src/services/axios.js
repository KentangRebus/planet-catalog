import axios from "axios";

const createAPI = (baseURL = process.env.REACT_APP_API_URL, config = {}) => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...config,
  });

  return axiosInstance;
};

const API = createAPI();

export function customAPI(url) {
  return createAPI(url);
}

export default API;
