import { useState } from "react";
import { db } from "../../../Api/firebase";
import { collection, getDocs } from "firebase/firestore";
import styles from "./SearchList.module.css";
import illustration from "./illustration_girlwithbook_searching.png";
import BookCard from "../../Home/ListBooks/BookCard/BookCard";

const SearchList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getBooks = () => {
    if (searchQuery.length === 0) {
      setBooks([]);
      return;
    }
    const booksCollection = collection(db, "books");
    getDocs(booksCollection).then((querySnapshot) => {
      const allBooks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("wszytskie książki:", allBooks);
      const filteredBooks = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );

      console.log("przefiltrowane książki:", filteredBooks);
      setBooks(filteredBooks);
    });
  };

  const search = () => {
    console.log("search: [", searchQuery, "]");
    getBooks();
  };
  const updateSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.SearchWrapper}>
      <div className={styles.SearchBanner}>
        <img
          className={styles.SearchIllustration}
          src={illustration}
          alt="illustration"
        ></img>
        <div className={styles.SearchBox}>
          <p className={styles.SearchDescription}>Co chcesz przeczytać?</p>
          <input
            className={styles.SearchInput}
            onChange={updateSearchQuery}
            placeholder="Wyszukaj książkę"
          />
          <button className={styles.SearchButton} onClick={search}>
            Szukaj
          </button>
        </div>
      </div>
      <div className={styles.listBookWrapper}>
        <span className={styles.ListBooks}>Wyniki wyszukiwania:</span>
        {books.length === 0 ? (
          <p className={styles.listBooksFail}>
            Nie mamy książki, której szukasz :(. <br />
            Spróbuj ponownie - może znajdziesz coś innego :){" "}
          </p>
        ) : (
          <div className={styles.cards}>
            {books.map((book) => {
              return <BookCard key={book.id} book={book} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchList;
