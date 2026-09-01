import HeaderBrand from "./HeaderBrand";
import HeaderNav from "./HeaderNav";
import styles from "./Header.module.css";

const Header = ({ favoritesCount = 0 }) => {
  return (
    <header className={styles.header}>
      <HeaderBrand title="Explorador de Países" />
      <HeaderNav favoritesCount={favoritesCount} />
    </header>
  );
};

export default Header;
