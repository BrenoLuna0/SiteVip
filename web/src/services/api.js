import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://vip-site.herokuapp.com/api",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

export function fetcher(path) {
  return api.get(path).then((response) => response.data);
}

export default api;
