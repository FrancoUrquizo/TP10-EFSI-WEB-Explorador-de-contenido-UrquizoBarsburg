import styles from "./FavoriteButton.module.css";

const FavoriteButton = ({ isFavorite, onClick }) => {
  const label = isFavorite ? "Quitar de favoritos" : "Agregar a favoritos";

  return (
    <button
      type="button"
      className={`${styles.btn}${isFavorite ? " " + styles.btnActive : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FavoriteButton;
