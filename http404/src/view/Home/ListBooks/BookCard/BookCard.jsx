import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
        <img
          className={styles.bookCover}
          src={book.image}
          alt={`${book.title} cover`}
        />
      </div>
      <Link to={`${book.title}/${book.id}`}>
        <div className={styles.cardContent}>
          <p className={styles.title}> {book.title}</p>
          <p className={styles.author}> {book.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
