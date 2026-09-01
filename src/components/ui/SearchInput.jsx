import styles from "./SearchInput.module.css";

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className={styles.searchBarInput}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
};

export default SearchInput;
