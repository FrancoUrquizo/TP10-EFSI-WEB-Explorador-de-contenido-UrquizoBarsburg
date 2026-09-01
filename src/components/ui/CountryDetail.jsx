import styles from "./CountryDetail.module.css";

const CountryDetail = ({ label, value }) => {
  return (
    <p className={styles.detail}>
      <span>{label}:</span> {value ?? "—"}
    </p>
  );
};

export default CountryDetail;
