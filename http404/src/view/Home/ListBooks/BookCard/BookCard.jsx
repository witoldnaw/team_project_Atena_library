import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

const BookCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
        <img
          className={styles.bookCover}
          src={props.image}
          alt={`${props.title} cover`}
        />
      </div>
      <Link to={props.title}>
        <div className={styles.cardContent}>
          <p className={styles.title}> {props.title}</p>
          <p className={styles.author}> {props.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
