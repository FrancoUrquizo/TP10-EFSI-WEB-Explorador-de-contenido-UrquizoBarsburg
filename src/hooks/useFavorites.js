import { useState } from "react";

const STORAGE_KEY = "favoriteCountries";

const getInitialFavorites = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const useFavorites = () => {
  const [favorites, setFavorites] = useState(getInitialFavorites);

  const isFavorite = (cca3) => favorites.includes(cca3);

  const toggleFavorite = (cca3) => {
    setFavorites((prev) => {
      let next;
      if (prev.includes(cca3)) {
        next = prev.filter((id) => id !== cca3);
      } else {
        next = [...prev, cca3];
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return { favorites, isFavorite, toggleFavorite };
};

export default useFavorites;
