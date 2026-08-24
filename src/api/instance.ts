import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://api.yeatwork.ru",
  headers: {
    "Content-Type": "application/json",
  },
});
