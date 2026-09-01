import useCountries from "../hooks/useCountries";
import useFavorites from "../hooks/useFavorites";
import SearchBar from "../components/ui/SearchBar";
import ItemList from "../components/ui/ItemList";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import LoadingState from "../components/ui/states/LoadingState";
import ErrorState from "../components/ui/states/ErrorState";

const Home = () => {
  const { filteredCountries, loading, error, search, setSearch } = useCountries();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <Section>
      <PageHeader title="Explorá el mundo" subtitle="Busca y guarda tus países favoritos." />
      <SearchBar search={search} onSearch={setSearch} />
      <ItemList
        items={filteredCountries}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </Section>
  );
};

export default Home;
