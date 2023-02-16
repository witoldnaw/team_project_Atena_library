import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../Api/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import styles from "./BookDetails.module.css";
import { AddBookToUserButton } from "../../components/UserBooks/AddBookToUserButton/AddBookToUserButton.jsx";

export const BookDetails = () => {
  const params = useParams();
  const [book, setBook] = useState([]);

  function getBooksById(id) {
    const docRef = doc(db, "books", id);
    return getDoc(docRef)
      .then((querySnapshot) => {
        return {
          id: querySnapshot.id,
          ...querySnapshot.data(),
        };
      })
      .then((data) => {
        return data;
      });
  }

  useEffect(() => {
    getBooksById(params.bookId)
      .then((data) => {
        setBook(data);
      })
      .catch((er) => console.log(er));
  }, [params.bookId]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{book.title}</h1>
      <div className={styles.infoWrapper}>
        <section className={styles.book_info}>
          <img src={book.image} alt="cover img" />{" "}
          <ul className={styles.info_list}>
            <li>
              <p>
                <strong>Tytuł: </strong>
                {book.title}
              </p>
            </li>
            <li>
              <p>
                <strong>Autor: </strong>
                {book.author}
              </p>
            </li>
            <li>
              <p>
                <strong>Gatunek: </strong>
                {book.genre}
              </p>
            </li>
            <li>
              <p>
                <strong>Status: </strong>
                {book.status}
              </p>
            </li>
          </ul>
        </section>
      </div>
      <section className={styles.book_description}>
        <h3>Opis:</h3>
        <p>{book.description}</p>
      </section>
      <div className={styles.button_wrapper}>
        <AddBookToUserButton buttonStyle={styles.addButton} book={book} />
      </div>
    </div>
  );
};
