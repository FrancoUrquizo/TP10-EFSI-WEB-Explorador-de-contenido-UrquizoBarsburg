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
const COUNTRIES_CACHE_KEY = "countries-cache-v1";
const CACHE_DURATION = 24 * 60 * 60 * 1000;

let countriesRequest = null;

const readCountriesCache = (allowExpired = false) => {
  try {
    const cached = JSON.parse(localStorage.getItem(COUNTRIES_CACHE_KEY));
    const isValid =
      Array.isArray(cached?.objects) &&
      (allowExpired || Date.now() - cached.savedAt < CACHE_DURATION);

    return isValid ? cached.objects : null;
  } catch {
    return null;
  }
};

const saveCountriesCache = (objects) => {
  try {
    localStorage.setItem(
      COUNTRIES_CACHE_KEY,
      JSON.stringify({ objects, savedAt: Date.now() })
    );
  } catch {
    // La app puede seguir funcionando aunque el navegador bloquee localStorage.
  }
};

export const getAllCountriesPaginated = async (pageSize = MAX_PAGE_LIMIT) => {
  const cachedCountries = readCountriesCache();
  if (cachedCountries) return cachedCountries;

  if (countriesRequest) return countriesRequest;

  countriesRequest = (async () => {
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

    saveCountriesCache(allObjects);
    return allObjects;
  })();

  try {
    return await countriesRequest;
  } catch (error) {
    const staleCountries = readCountriesCache(true);
    if (staleCountries) return staleCountries;
    throw error;
  } finally {
    countriesRequest = null;
  }
};

export default api;
