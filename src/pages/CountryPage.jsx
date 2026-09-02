import { useParams, Link } from "react-router-dom";
import useCountryDetail from "../hooks/useCountryDetail";
import useFavorites from "../hooks/useFavorites";
import CountryFlag from "../components/ui/CountryFlag";
import CountryDetail from "../components/ui/CountryDetail";
import FavoriteButton from "../components/ui/FavoriteButton";
import Section from "../components/layout/Section";
import LoadingState from "../components/ui/states/LoadingState";
import ErrorState from "../components/ui/states/ErrorState";
import styles from "./CountryPage.module.css";

const formatPopulation = (population) =>
  new Intl.NumberFormat("es-AR").format(population);

const CountryPage = () => {
  const { cca3 } = useParams();
  const { country, loading, error } = useCountryDetail(cca3);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (loading) {
    return <LoadingState />;
  }

  if (error || !country) {
    return <ErrorState message="No fue posible obtener la información del país." />;
  }

  const { name, flags, capitalName, region, population, languages, currencies } =
    country;

  return (
    <Section>
      <Link to="/" className={styles.back}>
        ← Volver
      </Link>

      <div className={styles.card}>
        <CountryFlag svg={flags.svg} name={name.common} className={styles.flag} />
        <div className={styles.body}>
          <h2 className={styles.title}>{name.common}</h2>
          <div className={styles.details}>
            <CountryDetail label="Capital" value={capitalName} />
            <CountryDetail label="Región" value={region} />
            <CountryDetail
              label="Población"
              value={population ? formatPopulation(population) : "—"}
            />
            <CountryDetail
              label="Idiomas"
              value={languages.length ? languages.join(", ") : "—"}
            />
            <CountryDetail
              label="Moneda"
              value={currencies.length ? currencies.join(", ") : "—"}
            />
          </div>
          <FavoriteButton
            isFavorite={isFavorite(cca3)}
            onClick={() => toggleFavorite(cca3)}
          />
        </div>
      </div>
    </Section>
  );
};

export default CountryPage;
