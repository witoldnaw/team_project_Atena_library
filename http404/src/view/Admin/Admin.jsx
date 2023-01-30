// import { useEffect, useState, useCon} from "react";
// import { db } from "../../Api/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import BookCard from "../../view/Home/ListBooks/BookCard/BookCard";
// import styles from "../../view/Home/ListBooks/ListBooks.module.css";
// import ReactPaginate from "react-paginate";

// export const Admin = ({BookCard}) => {

//     const handleOnClick = () => {
//         actionDispatch({type: "REMOVE_BOOK", id: bookProp.id})


//         firebase.firestore().collection('books').doc(id).delete()
//         .then(()=>{console.log("successfully deleted! ")})
//         .catch((error)=>{ console.log("Error removing document:", error)})
//     }
//     return(
//         <div>
//             {
//                 <li onClick={handleOnClick}>
//                     <div className="title">{bookProp.title}</div>
//                     <div className="author">{bookProp.author}</div>
//                 </li>
//             }
//         </div>
//     )
//     }



