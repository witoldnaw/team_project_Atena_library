import { Link } from "react-router-dom";
import { UserProfile } from "../../../../components/UserProfile/UserProfile";
import styles from "./BookCard.module.css";

const BookCard = ({ book, user }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardOptions}>
          <Link to={`/${book.title}/${book.id}`}>
            <button className={styles.cardOption}>Szczegóły</button>
          </Link>
          {user ? (
            <UserProfile />
          ) : (
            <Link to="/auth/login">
              <button className={styles.cardOption}>Wypożycz</button>
            </Link>
          )}
        </div>
        <div className={styles.cardMedia}>
          <img
            className={styles.bookCover}
            src={book.image}
            alt={`${book.title} cover`}
          />
        </div>
      </div>
      <Link to={`/${book.title}/${book.id}`}>
        <div className={styles.cardContent}>
          <p className={styles.title}> {book.title}</p>
          <p className={styles.author}> {book.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
