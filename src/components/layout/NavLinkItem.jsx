import { NavLink } from "react-router-dom";
import styles from "./NavLinkItem.module.css";

const NavLinkItem = ({ to, children, badge }) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `${styles.navLink}${isActive ? " " + styles.navLinkActive : ""}`
      }
    >
      {children}
      {badge > 0 && <span className={styles.navLinkBadge}>{badge}</span>}
    </NavLink>
  );
};

export default NavLinkItem;
