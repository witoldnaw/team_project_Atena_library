import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import avatar from "../../../assets/atena_avatar1.png";
import { userDataContext } from "../../../components/UserDataContext/UserDataContext";
import { UserBooksList } from "../../../components/UserBooksList/UserBooksList";

export const Profile = () => {
  const { userData } = useContext(userDataContext);
  return (
    <>
      <section className={styles.user_profile}>
        <img className={styles.user_picture} src={avatar} alt="user avatar" />
        <div>
          <ul className={styles.user_text}>
            <li>
              <h3>
                {userData.name} {userData.surname}
              </h3>
            </li>
            <li>
              <p>{userData.description}</p>
            </li>
            <li className={styles.contact}>
              <p>{userData.email}</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.user_books}>
        <h2>Twoja Półka:</h2>
        <ul className={styles.book}>
          {/* <li>
            <img src="" alt="book cover" />
          </li>
          <li>
            <ul className={styles.book_details}>
              <li>
                <p>Tytuł:</p>
              </li>
              <li>
                <p>Autor:</p>
              </li>
              <li>
                Opis: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur libero odit impedit, esse porro aperiam quae
                voluptatum, eaque labore ducimus nobis architecto magni. Rem,
                harum! Animi nobis dolore distinctio deserunt!
              </li>
              <li>Data wypożyczenia 20.01.2023</li>
              <li>Data Zwrotu 20.02.2023</li>
            </ul>
          </li> */}
          <UserBooksList />
        </ul>
        <div className={styles.button_wrapper}>
          <Link to="/searching">
            <button className={styles.button}>Wypożycz kolejną książkę</button>
          </Link>
        </div>
      </section>
    </>
  );
};
