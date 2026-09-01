import styles from "./PageHeader.module.css";

const PageHeader = ({ title, subtitle }) => {
  return (
    <header className={styles.pageHeader}>
      <h2 className={styles.pageTitle}>{title}</h2>
      {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
    </header>
  );
};

export default PageHeader;
