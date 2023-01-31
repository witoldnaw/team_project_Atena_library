import { useEffect, useState } from "react";
import { db } from "../../../Api/firebase";
import { collection, getDocs } from "firebase/firestore";
import BookCard from "./BookCard/BookCard";
import styles from "./ListBooks.module.css";
import ReactPaginate from "react-paginate";

const ListBooks = ({ selectedGenre }) => {
  console.log(`selected Genres:`, selectedGenre);

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const [totalPages, setTotalPages] = useState(1);

  const getBooks = () => {
    const startIndex = (currentPage - 1) * limit;
    const booksCollection = collection(db, "books");
    getDocs(booksCollection).then((querySnapshot) => {
      const allBooks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(`wszytskie książki`, allBooks);
      const filteredBooks = allBooks.filter((book) => {
        if (selectedGenre.id === "allGenres") {
          return true
        }
        if (book.genre) {
          return book.genre.toLowerCase() === selectedGenre.name.toLowerCase();
        } else {
          return false;
        }
      });
      console.log(`przefiltrowane książki`, filteredBooks);
      const booksOnPage = filteredBooks.slice(startIndex, startIndex + limit);

      console.log(`książki na stronie`, booksOnPage);
      setBooks(booksOnPage);
      setTotalPages(Math.ceil(filteredBooks.length / limit));
    });
  };

  useEffect(() => {
    getBooks();
  }, [currentPage]);

  const handlePageChange = (data) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <div className={styles.listBookWrapper}>
      <span className={styles.ListBooks}>Wypożycz książkę:</span>
      <div className={styles.cards}>
        {books.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>

      <div id="react-paginate" className={styles.reactPaginate}>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={10}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default ListBooks;
