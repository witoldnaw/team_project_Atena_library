// import { useEffect, useState } from "react";
// import { db } from "../../../src/Api/firebase";
// import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { Edit } from "./Edit";
// import Modal from 'react-modal';


// export const DeleteBooks = () => {
//   const [books, setBooks] = useState([]);


//   const getData = () => {
//     const itemsCollection = collection(db, "books");
//     getDocs(itemsCollection).then((querySnapshot) => {
//       const books = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setBooks(books);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleDelete = (id) => {
//     const docRef = doc(db, "books", id);

//     deleteDoc(docRef)
//     .then(() => {
//         toast.success("Entire Document has been deleted successfully.")
//         setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     id.preventDefault()
//   }


//   return (
//     <>
//     <ul>
//       {books.map((item) => (
//         <div>
//           <li key={item.id}>{item.title}</li>
//           <li key={item.id}>{item.author}</li>
//           <img src={item.image} alt="okładka ksiązki" style={{width:"10vw"}}></img>
//           <button onClick={() => {handleDelete(item.id)}}>Delete</button>
//           {/* <button onClick={openModal}>Open Modal</button> */}
//         </div>
//       ))}
//     </ul>

//         </>
//   );
// }

