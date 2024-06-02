// axiosHelper.js
import axios from "axios";

const baseURL = "http://localhost:4000/";

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosGet = (url, params = {}) => {
  return params ? instance.get(url, { params }) : instance.get(url);
};

export const axiosPost = (url, data = {}) => {
  return instance.post(url, data);
};

export const axiosPut = (url, data = {}) => {
  return instance.put(url, data);
};

export const axiosDelete = (url) => {
  return instance.delete(url);
};
