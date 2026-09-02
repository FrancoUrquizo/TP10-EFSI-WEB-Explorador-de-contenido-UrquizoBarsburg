import { useEffect, useState } from "react";
import { getAllCountriesPaginated } from "../services/api";
import { mapCountry } from "../services/countryMapper";

const useCountryDetail = (cca3) => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!cca3) return;

    const fetchCountry = async () => {
      try {
        const objects = await getAllCountriesPaginated();
        const raw = objects.find(
          (c) => c?.codes?.alpha_3 === cca3 || c?.uuid === cca3
        );
        if (!raw) {
          setError(true);
        } else {
          setCountry(mapCountry(raw));
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [cca3]);

  return { country, loading, error };
};

export default useCountryDetail;
