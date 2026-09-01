import ItemCard from "./ItemCard";
import EmptyState from "./states/EmptyState";
import styles from "./ItemList.module.css";

const ItemList = ({ items = [], isFavorite, onToggleFavorite }) => {
  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.itemList}>
      {items.map((item) => (
        <ItemCard
          key={item.cca3}
          item={item}
          isFavorite={isFavorite(item.cca3)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ItemList;
