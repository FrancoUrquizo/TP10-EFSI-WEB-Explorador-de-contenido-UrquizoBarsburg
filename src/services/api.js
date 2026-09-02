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

const MAX_PAGE_LIMIT = 100;

export const getAllCountriesPaginated = async (pageSize = MAX_PAGE_LIMIT) => {
  const allObjects = [];
  let offset = 0;
  let more = true;

  while (more) {
    const { data } = await api.get("", {
      params: { limit: pageSize, offset },
    });

    const objects = data?.data?.objects ?? [];
    allObjects.push(...objects);

    const meta = data?.data?.meta;
    if (!meta) break;
    more = Boolean(meta.more);
    offset += objects.length;

    if (meta.total !== undefined && allObjects.length >= meta.total) break;
    if (objects.length === 0) break;
  }

  return allObjects;
};

export default api;
