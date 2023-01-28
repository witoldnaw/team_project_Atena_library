import styles from "./Profile.module.css";
import avatar from "../../assets/atena_avatar1.png";

export const Profile = () => {
    return (
        <>
            <section className={styles.user_profile}>
                <img
                    className={styles.user_picture}
                    src={avatar}
                    alt="user avatar"
                />
                <div>
                    <ul className={styles.user_text}>
                        <li>
                            <h2>Nazwa Użytkownika</h2>
                        </li>
                        <li>
                            <h3>Imię i Nazwisko</h3>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores dignissimos, et vel
                                dicta illo placeat quod consectetur soluta,
                                maiores magnam eius aliquid, obcaecati quaerat
                                sed odio expedita necessitatibus assumenda
                                aliquam. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ex voluptate nostrum
                                cupiditate eius corporis eaque rem veritatis
                                excepturi reiciendis suscipit ipsa provident,
                                error, sunt nobis sint, optio animi perspiciatis
                                consectetur.
                            </p>
                        </li>
                        <li className={styles.contact}>
                            <p>+48 1320892082</p>
                            <p>imie.nazwisko@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.user_books}>
                <h2>Twoja Półka:</h2>
                <ul className={styles.book}>
                    <li>
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
                                Opis: Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequuntur libero odit
                                impedit, esse porro aperiam quae voluptatum,
                                eaque labore ducimus nobis architecto magni.
                                Rem, harum! Animi nobis dolore distinctio
                                deserunt!
                            </li>
                            <li>Data wypożyczenia 20.01.2023</li>
                            <li>Data Zwrotu 20.02.2023</li>
                        </ul>
                    </li>
                </ul>
                <div className={styles.button_wrapper}>
                    <button className={styles.button}>
                        Wypożycz kolejną książkę
                    </button>
                </div>
            </section>
        </>
    );
};
