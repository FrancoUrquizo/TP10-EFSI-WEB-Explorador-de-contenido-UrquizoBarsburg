import useCountries from "./useCountries";
import useFavorites from "./useFavorites";

const useFavoriteCountries = () => {
  const { countries, loading, error } = useCountries();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const favoriteCountries = countries.filter(({ cca3 }) =>
    favorites.includes(cca3)
  );

  return {
    favoriteCountries,
    loading,
    error,
    isFavorite,
    toggleFavorite,
    favorites,
  };
};

export default useFavoriteCountries;
