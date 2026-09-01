import styles from "./LoadingState.module.css";

const LoadingState = ({ message = "Cargando información..." }) => {
  return <p className={styles.statusMessage}>{message}</p>;
};

export default LoadingState;
