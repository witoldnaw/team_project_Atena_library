import { useEffect, useState } from "react";
import { db } from "../../../Api/firebase";
import { collection, getDocs } from "firebase/firestore";
import BookCard from "./BookCard/BookCard";
import styles from "./ListBooks.module.css";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    const booksCollection = collection(db, "books");
    getDocs(booksCollection).then((querySnapshot) => {
      const books = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(books);
      setBooks(books);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={styles.listBookWrapper}>
      <span className={styles.ListBooks}>Choose Your Story:</span>
      <div className={styles.cards}>
        {books.map((book) => {
          return (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              image={book.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListBooks;
