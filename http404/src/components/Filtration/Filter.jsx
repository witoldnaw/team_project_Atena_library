import styles from "./Filtration.module.css";

const Filter = ({ genre, onGenreChange }) => {
  return (

    <div className={styles.filter}>
      <label for={genre.name} className={styles.labelFilter}>
      <input type="radio" id={genre.name} value={genre.name} name="cetegory" onClick={() => onGenreChange(genre)}/>
      <span>{genre.name}</span>
      </label>
      {/* <button onClick={() => onGenreChange(genre)}>{genre.name}</button> */}

    </div>
  );
};

export default Filter;
