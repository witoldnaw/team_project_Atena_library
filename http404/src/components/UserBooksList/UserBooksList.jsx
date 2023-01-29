import { useState, useEffect, useContext } from "react";
import { getDocs, doc, query, collection, where } from "firebase/firestore";
import { db } from "../../Api/firebase";
import { userDataContext } from "../UserDataContext/UserDataContext";
import { async } from "@firebase/util";

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
    return <h1 key={book.id}>{book.title}</h1>;
  });
};
