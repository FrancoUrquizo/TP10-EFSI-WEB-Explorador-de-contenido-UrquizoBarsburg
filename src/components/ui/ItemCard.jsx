import { Link } from "react-router-dom";
import CountryFlag from "./CountryFlag";
import CountryInfo from "./CountryInfo";
import FavoriteButton from "./FavoriteButton";
import styles from "./ItemCard.module.css";

const ItemCard = ({ item, isFavorite, onToggleFavorite }) => {
  const { name, flags, capitalName, region, cca3 } = item;

  return (
    <article className={styles.card}>
      <Link to={`/pais/${cca3}`} className={styles.link}>
        <CountryFlag svg={flags.svg} name={name.common} className={styles.flagZoom} />
        <div className={styles.body}>
          <CountryInfo name={name.common} capitalName={capitalName} region={region} />
        </div>
      </Link>
      <div className={styles.footer}>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => onToggleFavorite(cca3)}
        />
      </div>
    </article>
  );
};

export default ItemCard;
