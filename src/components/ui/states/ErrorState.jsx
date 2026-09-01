import styles from "./ErrorState.module.css";

const ErrorState = ({ message = "No fue posible obtener la información." }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorState;
