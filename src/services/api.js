import axios from "axios";

const API_KEY = import.meta.env.VITE_RC_API_KEY;

const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  if (API_KEY) {
    config.headers.Authorization = `Bearer ${API_KEY}`;
  }
  return config;
});

export const getAllCountries = (params = {}) => api.get("", { params });

export default api;
