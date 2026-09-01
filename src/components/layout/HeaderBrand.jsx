import styles from "./HeaderBrand.module.css";

const HeaderBrand = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default HeaderBrand;
