import NavLinkItem from "./NavLinkItem";
import styles from "./HeaderNav.module.css";

const HeaderNav = ({ favoritesCount }) => {
  return (
    <nav className={styles.nav}>
      <NavLinkItem to="/">Inicio</NavLinkItem>
      <NavLinkItem to="/favoritos" badge={favoritesCount}>
        Favoritos
      </NavLinkItem>
    </nav>
  );
};

export default HeaderNav;
