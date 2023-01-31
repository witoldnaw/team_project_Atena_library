import styles from "./Filtration.module.css";

const Filter = ({genre}) => {


  return (
    <div className={styles.filter}>
      <button>{genre}</button>
    </div>
  );
};

export default Filter;
