import useFavoriteCountries from "../hooks/useFavoriteCountries";
import ItemList from "../components/ui/ItemList";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import LoadingState from "../components/ui/states/LoadingState";
import ErrorState from "../components/ui/states/ErrorState";
import EmptyState from "../components/ui/states/EmptyState";

const FavoritesPage = () => {
  const { favoriteCountries, loading, error, isFavorite, toggleFavorite } =
    useFavoriteCountries();

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <Section>
      <PageHeader
        title="Mis Favoritos"
        subtitle="Los países que guardaste se muestran acá."
      />
      {favoriteCountries.length === 0 ? (
        <EmptyState message="Todavía no guardaste ningún país favorito." />
      ) : (
        <ItemList
          items={favoriteCountries}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </Section>
  );
};

export default FavoritesPage;
