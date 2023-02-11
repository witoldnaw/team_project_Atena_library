import React, { useState, useEffect } from "react";
import { db } from "../../Api/firebase";
import { collection, addDoc } from "firebase/firestore";
import styles from "./Admin.module.css"
import { Edit } from "./Edit";
import illustration from "./illustration_boywithbook_admin.png"

export const AddBooks = () => {
  const colRef = collection(db, "books");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      title,
      author,
      description,
      status,
      userId: "",
      image,
      genre,
    })
      .then(() => {
        setTitle("");
        setAuthor("");
        setDescription("");
        setStatus("");
        setImage("");
        setGenre("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <h2 className={styles.h2}>Panel administratora</h2>
<div className={styles.adminWrapper}>
      <form className={styles.formAdminWrapper} onSubmit={handleSubmit}>
        <label htmlFor="title">Tytuł:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="author">Autor:</label>
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

<label htmlFor="genre">Kategoria</label>
<select id="genre" name="genre" onChange={(e) => setGenre(e.target.value)}
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
        <button id={styles.buttonAppearance}>Dodaj książkę</button>
        </form>
        <img className={styles.illustration} src={illustration} alt="illustrartion man with book"></img>
</div>
        <Edit/>
        </>
  )

}
        