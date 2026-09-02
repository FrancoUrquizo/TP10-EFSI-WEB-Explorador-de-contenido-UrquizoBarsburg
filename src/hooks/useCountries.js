import { useEffect, useState } from "react";
import { getAllCountriesPaginated } from "../services/api";
import { mapCountries } from "../services/countryMapper";

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const objects = await getAllCountriesPaginated();
        setCountries(mapCountries(objects));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(({ name }) =>
    name.common.toLowerCase().includes(search.toLowerCase())
  );

  return { countries, filteredCountries, loading, error, search, setSearch };
};

export default useCountries;
