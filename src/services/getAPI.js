import axios from "axios";

const DOMAIN = "http://localhost:4000/";

export const getApi = async (url) => {
  try {
    const res = await axios.get(`${DOMAIN}${url}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
