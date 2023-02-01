import styles from "./Filtration.module.css";

const Filter = ({ genre, onGenreChange }) => {
  return (
    <div className={styles.filter}>
      <button onClick={() => onGenreChange(genre)}>{genre.name}</button>
    </div>
  );
};

export default Filter;
