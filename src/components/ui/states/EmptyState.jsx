import styles from "./EmptyState.module.css";

const EmptyState = ({ message = "No se encontraron resultados." }) => {
  return <p className={styles.empty}>{message}</p>;
};

export default EmptyState;
