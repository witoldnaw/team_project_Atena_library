import { useEffect, useState, useCon} from "react";
import { db } from "../../Api/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import BookCard from "../../view/Home/ListBooks/BookCard/BookCard";
import styles from "../../view/Home/ListBooks/ListBooks.module.css";
import ReactPaginate from "react-paginate";

const colRef = collection(db, "books")

const addBookForm = document.querySelector(".add")
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        description: addBookForm.description.value,
        status: addBookForm.status.value,
        userId: addBookForm.userId.value,
        image: addBookForm.imageURL.value,
    })
    .then(() => {
        addBookForm.reset()
    })
})

export const Admin = () => {

    return (
<>
<h2>Formularz dodawania ksiązek</h2>

<form class="add">
    <label for="title">Title:</label>
    <input type="text" name="title" required></input>
    <label for="author">Author:</label>
    <input type="text" name="author" required></input>
    <label for="description">Opis</label>
    <input type="text" name="description" required></input>
    {/* <label for="status">Dostępna</label>
    <input type="radio" name="status" required></input>
    <label for="status">Nie dostępna</label>
    <input type="radio" name="status" required></input> */}
    <input type="hidden" name="userId" value=""></input>
    <label for="imageURL">Link do zdjęcia okładki</label>
    <input type="url" name="imageURL" required></input>
<br></br>
<input type="submit" value="submit"></input>
    <button>dodaj ksiazke</button>
</form>

<form class="delete">

<label for="id">Document id</label>
<input type="text" name="id" required></input>
<button>usun ksiazke</button>
</form>
</>
    )
}

