import styles from "./Section.module.css";

const Section = ({ children, className = "" }) => {
  return (
    <section className={`${styles.section} ${className}`.trim()}>{children}</section>
  );
};

export default Section;
