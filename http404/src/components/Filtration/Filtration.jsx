import { useState, useEffect } from "react";
import Filter from "./Filter";
import styles from "./Filtration.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Api/firebase";

const Filtration = () => {
  const [genres, setGenres] = useState([]);

  const getGenres = () => {
    const genreCollection = collection(db, "genres");
    getDocs(genreCollection).then((querySnapshot) => {
      const allGenres = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("wszystkie kategorie:", allGenres);
      setGenres(allGenres);
    });
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className={styles.filtrationWrapper}>
        <Filter key="allGenres" genre="Wszystkie książki"/>
      {genres.map((genreItem) => {
        return <Filter key={genreItem.id} genre={genreItem.name}/>
       ;
      })}
    </div>
  );
};

export default Filtration;
