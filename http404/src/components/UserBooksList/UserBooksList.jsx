import { useState, useEffect, useContext } from "react";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../Api/firebase";
import { userDataContext } from "../UserDataContext/UserDataContext";
import styles from "./UserBooksList.module.css";
import { Link } from "react-router-dom";

export const UserBooksList = () => {
  const [userBooks, setUserBooks] = useState([]);
  const { userData } = useContext(userDataContext);

  useEffect(() => {
    async function getBooksByUserId() {
      const q = query(
        collection(db, "books"),
        where("userId", "==", userData.id)
      );
      const querySnapshot = await getDocs(q);
      const books = querySnapshot.docs.map((book) => ({
        id: book.id,
        ...book.data(),
      }));
      setUserBooks(books);
    }
    getBooksByUserId();
  }, [userData.id]);

  return userBooks.map((book) => {
    return (
      <li className={styles.user_books}>
        <img key={book.id} src={book.image} alt="book cover" />
        <ul className={styles.user_books_details}>
          <li>
            <h3 key={book.id}>{book.title}</h3>
          </li>
          <li>
            <h4 key={book.id}>{book.author}</h4>
          </li>
          <li>
            <p key={book.id}>{book.description.substring(0, 100)}...</p>
          </li>
        </ul>
        <div>
          <Link to={`/${book.title}/${book.id}`}>
            <button>Zobacz Książkę</button>
          </Link>
        </div>
      </li>
    );
  });
};
