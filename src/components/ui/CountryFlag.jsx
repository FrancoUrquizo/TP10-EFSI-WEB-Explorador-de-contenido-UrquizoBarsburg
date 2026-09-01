import styles from "./CountryFlag.module.css";

const CountryFlag = ({ svg, name, className = "" }) => {
  return (
    <img
      src={svg}
      alt={`Bandera de ${name}`}
      className={`${styles.flag} ${className}`.trim()}
    />
  );
};

export default CountryFlag;
