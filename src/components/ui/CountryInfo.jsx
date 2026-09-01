import CountryDetail from "./CountryDetail";
import styles from "./CountryInfo.module.css";

const CountryInfo = ({ name, capitalName, region }) => {
  return (
    <div className={styles.info}>
      <h3 className={styles.name}>{name}</h3>
      <CountryDetail label="Capital" value={capitalName} />
      <CountryDetail label="Región" value={region} />
    </div>
  );
};

export default CountryInfo;
