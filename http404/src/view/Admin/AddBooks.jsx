import React, { useState, useEffect } from "react";
import { db } from "../../Api/firebase";
import { collection, addDoc } from "firebase/firestore";
import styles from "./Admin.module.css"
import { Edit } from "./Edit";

export const AddBooks = () => {
  const colRef = collection(db, "books");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [genres, setGenres] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      title,
      author,
      description,
      status,
      userId: "",
      image,
      genres,
    })
      .then(() => {
        setTitle("");
        setAuthor("");
        setDescription("");
        setStatus("");
        setImage("");
        setGenres("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <h2>Formularz dodawania ksiązek</h2>

      <form className={styles.formAdminWrapper} onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label htmlFor="description">Opis</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

<label htmlFor="imageURL">Link do zdjęcia okładki</label>
        <input
          type="url"
          name="imageURL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />


<label htmlFor="genres">Gatunek</label>
<select id="genres" name="genres" onChange={(e) => setGenres(e.target.value)}
          required>
    <option value="kryminał">Kryminał</option>
    <option value="lektura szkolna">Lektura szkolna</option>
    <option value="poradnik">Poradnik</option>
    <option value="ksiąka dla dzieci">Ksiąka dla dzieci</option>
    <option value="biografia">Biografia</option>
    <option value="literatura obyczajowa">Literatura obyczajowa</option>
    <option value="thiller">Thiller</option>
    <option value="literatura piękna">Literatura piękna</option>
  </select>
        
<div className={styles.statusWrapper}>
        <label  className={styles.statusdetails}  htmlFor="status">Dostępna</label>
        <input className={styles.status}
          type="radio"
          name="status"
          value="dostępna"
          checked={status === "dostępna"}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <label className={styles.statusdetails} htmlFor="status">Niedostępna</label>
        <input className={styles.status}
          type="radio"
          name="status"
          value="niedostępna"
          checked={status === "niedostępna"}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
</div>
        <br />
        <button>dodaj ksiazke</button>
        </form>
        <Edit/>
        </>
  )

}
        