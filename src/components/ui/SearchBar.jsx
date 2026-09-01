import SearchInput from "./SearchInput";
import styles from "./SearchBar.module.css";

const SearchBar = ({ search, onSearch, placeholder = "Buscar país..." }) => {
  return (
    <div className={styles.searchBar}>
      <SearchInput value={search} onChange={onSearch} placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
