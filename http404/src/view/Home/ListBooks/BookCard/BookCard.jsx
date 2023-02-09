import { Link } from "react-router-dom";
import { Profile } from "../../../Auth/Profile/Profile"
import styles from "./BookCard.module.css";
import { AddBookToUserButton } from "../../../../components/UserBooks/AddBookToUserButton/AddBookToUserButton";

const BookCard = ({ book, user }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardOptions}>
          <Link to={`/${book.title}/${book.id}`}>
            <button className={styles.cardOption}>Szczegóły</button>
          </Link>
          {user ? (
            <Profile />
          ) : (
            // <Link to="/auth/profile">
              <AddBookToUserButton buttonStyle={styles.cardOption} book={book} />
            // {/* </Link> */}
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
