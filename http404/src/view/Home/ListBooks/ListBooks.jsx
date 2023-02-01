import { useEffect, useState } from "react";
import { db } from "../../../Api/firebase";
import { collection, getDocs } from "firebase/firestore";
import BookCard from "./BookCard/BookCard";
import styles from "./ListBooks.module.css";
import ReactPaginate from "react-paginate";

const ListBooks = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const [totalPages, setTotalPages] = useState(1);

  const getBooks = () => {
    const startIndex = (currentPage - 1) * limit;
    const booksCollection = collection(db, "books");
    getDocs(booksCollection).then((querySnapshot) => {
      const books = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .slice(startIndex, startIndex + limit);
      console.log(books);
      setBooks(books);
      setTotalPages(Math.ceil(querySnapshot.size / limit));
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
