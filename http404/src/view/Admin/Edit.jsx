import { useEffect, useState } from "react";
import { db } from "../../../src/Api/firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import styles from "./Admin.module.css";
import Modal from "react-modal";

export const Edit = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Editbooks, setEditBooks] = useState([]);
  const [title, setNewTitle] = useState();
  const [author, setNewAuthor] = useState();
  const [description, setNewDescription] = useState();
  const [status, setNewStatus] = useState();
  const [image, setNewImage] = useState();
  const [genres, setNewGenres] = useState();

  const handleDelete = (id) => {
    const docRef = doc(db, "books", id);

    deleteDoc(docRef)
      .then(() => {
        toast.success("Entire Document has been deleted successfully.");
        setEditBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
    id.preventDefault();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      height: "90%",
      backgroundColor: "transparent"
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "transparent";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getData = () => {
    const itemsCollection = collection(db, "books");
    getDocs(itemsCollection).then((querySnapshot) => {
      const books = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEditBooks(books);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = (id) => {
    const docRef = doc(db, "books", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists) {
        const updates = {
          title: title || doc.data().title,
          author: author || doc.data().author,
          description: description || doc.data().description,
          status: status || doc.data().status,
          image: image || doc.data().image,
          genres: genres || doc.data().genres,
        };
        updateDoc(docRef, updates)
          .then(() => {
            toast.success("Title has been updated successfully.");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <>
        {Editbooks.map((item, index) => (
          <>
            <div className={styles.booksWrapper}>
            <img src={item.image} alt="okładka ksiązki" style={{width:"10vw"}}></img>
            <p className={styles.bookTitle} >{item.title}</p>
            <p className={styles.bookAuthor} >{item.author}</p>
            <p className={styles.bookStatus} >{item.status} </p>
            <button classname={styles.btnDelete} onClick={() => { handleDelete(item.id)}}>Usuń</button>
            <button classname={styles.btnEdit} onClick={openModal}>Edytuj</button>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className={styles.modalWrapper}>
              <label className={styles.labelWrapper} htmlFor="Tytuł">Tytuł:</label>
              <input
                className={styles.input}
                key={`title-${index}`}
                type="text"
                name="title"
                value={title}
                onChange={(e) => setNewTitle(e.target.value, index)}
              />

<label  className={styles.labelWrapper} htmlFor="author">Autor:</label>
              <input
                className={styles.input}
                key={item.author}
                type="text"
                name="author"
                value={author}
                onChange={(e) => setNewAuthor(e.target.value)}
              />

<label className={styles.labelWrapper} htmlFor="description">Opis:</label>
              <input
                className={styles.input}
                key={item.description}
                type="text"
                name="description"
                value={description}
                onChange={(e) => setNewDescription(e.target.value)}
              />

              <label  className={styles.labelWrapper} htmlFor="status">Niedostępna</label>
              <input
                className={styles.input}
                type="radio"
                name="status"
                value="niedostępna"
                checked={status === "niedostępna"}
                onChange={(e) => setNewStatus(e.target.value)}
              />

              <label className={styles.labelWrapper} htmlFor="status">Dostępna</label>
              <input
                className={styles.input}
                type="radio"
                name="status"
                value="dostępna"
                checked={status === "dostępna"}
                onChange={(e) => setNewStatus(e.target.value)}
              />

<label className={styles.labelWrapper} htmlFor="imageurl">Zdjęcie ksiązki:</label>
              <input
                className={styles.input}
                key={item.imageURL}
                type="text"
                placeholder={item.imageURL}
                name="imageURL"
                value={image}
                onChange={(e) => setNewImage(e.target.value)}
              />
<label className={styles.labelWrapper} htmlFor="gatunek">Gatunek:</label>
              <select
                className={styles.input}
                id="genres"
                name="genres"
                onChange={(e) => setNewGenres(e.target.value)}
              >
                <option value={genres}></option>
                <option value="kryminał">Kryminał</option>
                <option value="lektura szkolna">Lektura szkolna</option>
                <option value="poradnik">Poradnik</option>
                <option value="ksiąka dla dzieci">Ksiąka dla dzieci</option>
                <option value="biografia">Biografia</option>
                <option value="literatura obyczajowa">
                  Literatura obyczajowa
                </option>
                <option value="thiller">Thiller</option>
                <option value="literatura piękna">Literatura piękna</option>
              </select>

              <button onClick={() => { handleUpdate(item.id)}}>Wyślij zmiany</button>
              <button onClick={closeModal}>Zamknij</button>
              </div>
            </Modal>
            </>
        ))}
    </>
  );
};
