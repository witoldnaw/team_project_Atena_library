import styles from "./Filtration.module.css";

const Filter = ({ genre, onGenreChange }) => {
  return (
    <div className={styles.filter}>
      <label for={genre.name} className={styles.labelFilter}>
        <input
          className={styles.inputFilter}
          type="radio"
          id={genre.name}
          value={genre.name}
          name="category"
          onClick={() => onGenreChange(genre)}
        />
        <span className={styles.spanFilter}>
          <span className={styles.spanFilterText}>{genre.name}</span>
        </span>
      </label>
    </div>
  );
};

export default Filter;
